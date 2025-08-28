import userApiService from '../service/userApiService.js';
import fs from 'fs';
import path from 'path';
import db from '../models/index.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);






const read = async (req, res) => {
    try {
        if (req.query.page && req.query.limit) {
            let page = req.query.page;
            let limit = req.query.limit;
            let data = await userApiService.getUserWithPagination(+page, +limit);
            return res.status(200).json({
                EM: data.EM, // error message
                EC: data.EC, //error code
                DT: data.DT, //data
            })
        } else {
            let data = await userApiService.getAllUser(+page, +limit);
            return res.status(200).json({
                EM: data.EM, // error message
                EC: data.EC, //error code
                DT: data.DT, //data
            })
        }

    } catch (e) {
        console.log(e);
        return res.status(500).json({
            EM: 'error from server haha',// error message
            EC: '-1', //error code
            DT: '', //data
        })

    }

}

const readDoctor = async (req, res) => {
    try {
        const data = await userApiService.getAllDoctor();
        return res.status(200).json({
            EM: data.EM, // error message
            EC: data.EC, // error code
            DT: data.DT, // data
        });
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            EM: 'error from server',
            EC: '-1',
            DT: '',
        });
    }
};

const create = async (req, res) => {
    try {
        let imagePath = req.file ? `/images/${req.file.filename}` : '';
        let data = await userApiService.createNewUser({ ...req.body, image: imagePath });
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({ EM: 'error from server', EC: '-1', DT: '' });
    }
};

// controller/userController.js
const update = async (req, res) => {
    try {
        // 1. Lấy user hiện tại từ DB
        const user = await db.User.findByPk(req.body.id);
        if (!user) {
            return res.status(404).json({ EM: 'User not found', EC: 1, DT: '' });
        }

        // 2. Xử lý ảnh: nếu có ảnh mới thì xoá ảnh cũ
        let imagePath = req.file
            ? `/images/${req.file.filename}`
            : req.body.image || user.image || '';

        if (req.file && user.image && user.image !== imagePath) {
            const normalizedPath = user.image.startsWith('/')
                ? user.image.slice(1)
                : user.image;

            const fullPath = path.join(__dirname, '..', 'public', normalizedPath);

            try {
                if (fs.existsSync(fullPath)) {
                    fs.unlinkSync(fullPath); // Xóa ảnh cũ
                    console.log("🗑 Đã xoá ảnh cũ:", fullPath);
                }
            } catch (err) {
                console.error("⚠️ Lỗi khi xoá ảnh cũ:", err);
            }
        }

        // 3. Gọi service update
        let data = await userApiService.updateUser({ ...req.body, image: imagePath });

        return res.status(200).json(data);
    } catch (error) {
        console.error('❌ Update user error:', error);
        return res.status(500).json({ EM: 'error from server', EC: -1, DT: '' });
    }
};

const remove = async (req, res) => {
    try {
        let data = await userApiService.deleteUser(req.body.id);
        return res.status(200).json({
            EM: data.EM, // error message
            EC: data.EC, //error code
            DT: data.DT, //data
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            EM: 'error from server', // error message
            EC: '-1', //error code
            DT: '', //data
        })

    }

}

const getUserAccount = async (req, res) => {
    return res.status(200).json({
        EM: 'ok', // error message
        EC: 0,    // error code
        DT: {
            access_token: req.token,
            groupWithRoles: req.user.groupWithRoles,
            email: req.user.email,
            username: req.user.username
        }
    });
};

const getDoctorInfoByUserId = async (req, res) => {
    try {
        const userId = req.params.userId;
        const doctorInfo = await db.DoctorInfo.findOne({
            where: { userId: userId },
            include: {
                model: db.Specialty,
                attributes: ['id', 'name']
            }
        });

        if (!doctorInfo) {
            return res.status(200).json({
                EM: 'Doctor info not found',
                EC: 1,
                DT: null
            });
        }

        return res.status(200).json({
            EM: 'Doctor info fetched',
            EC: 0,
            DT: doctorInfo
        });
    } catch (e) {
        console.log("getDoctorInfoByUserId errror", e);
        return res.status(500).json({
            EM: 'Server error',
            EC: -1,
            DT: null
        });
    }
};

const getDoctorInfoWithAllData = async (req, res) => {
    try {
        const userId = req.params.userId;

        const doctorInfo = await db.DoctorInfo.findOne({
            where: { userId },
            include: [
                { model: db.Specialty, attributes: ['id', 'name'] },
                { model: db.Degree, attributes: ['id', 'name'] },
                { model: db.Position, attributes: ['id', 'name'] }
            ]
        });

        const specialties = await db.Specialty.findAll({ attributes: ['id', 'name'] });
        const degrees = await db.Degree.findAll({ attributes: ['id', 'name'] });
        const positions = await db.Position.findAll({ attributes: ['id', 'name'] });

        return res.status(200).json({
            EM: 'Fetched doctor info + all data',
            EC: 0,
            DT: {
                doctorInfo,
                specialties,
                degrees,
                positions
            }
        });
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            EM: 'Server error',
            EC: -1,
            DT: null
        });
    }
};


export default { read, create, update, remove, getUserAccount, readDoctor, getDoctorInfoByUserId, getDoctorInfoWithAllData }