import { where } from 'sequelize/lib/sequelize';
import db from '../models/index';
import { checkEmailExist, checkPhoneExist, hashUserPassword } from './loginRegisterService';
const getAllUser = async () => {
    try {
        let user = await db.User.findAll({
            attributes: ["id", "username", "email", "phone", "sex"],
            include: { model: db.Group, attributes: ["name", "description"] },
        });

        if (user) {
            return {
                EM: 'get data success',
                EC: 0,
                DT: user
            }
        } else {
            return {
                EM: 'get data success',
                EC: 0,
                DT: []
            }
        }

    } catch (e) {
        console.log(e);
        return {
            EM: 'something wrongs with services',
            EC: 1,
            DT: []
        }
    }
}
const getUserWithPagination = async (page, limit) => {
    try {
        let offset = (page - 1) * limit;
        const { count, rows } = await db.User.findAndCountAll({
            offset: offset,
            limit: limit,
            attributes: ["id", "image", "username", "email", "phone", "sex", "address"],
            include: { model: db.Group, attributes: ["name", "description", "id"] },
            order: [['id', 'DESC']]

        })

        let totalPages = Math.ceil(count / limit);
        let data = {
            totalRows: count,
            totalPages: totalPages,
            users: rows

        }
        return {
            EM: 'fetch ok',
            EC: 0,
            DT: data
        }

    } catch (error) {
        console.log(error)
        return {
            EM: 'something wrongs with services',
            EC: 1,
            DT: []
        }

    }

}






const createNewUser = async (data) => {
    try {
        let isEmailExist = await checkEmailExist(data.email);
        if (isEmailExist === true) {
            return {
                EM: 'The email is already exist',
                EC: 1,
                DT: 'email'
            }
        }

        let isPhoneExist = await checkPhoneExist(data.phone);
        if (isPhoneExist === true) {
            return {
                EM: 'The phone number is already exist',
                EC: 1,
                DT: 'phone'
            }
        }

        //hash user password
        let hashPassword = hashUserPassword(data.password);
        await db.User.create({ ...data, password: hashPassword });

        // ✅ Thêm return khi thành công
        return {
            EM: 'Create user successfully',
            EC: 0,
            DT: []
        }

    } catch (e) {
        console.log(e);
        return {
            EM: 'Something went wrong',
            EC: -1,
            DT: []
        }
    }
}


// service/userApiService.js
const updateUser = async (data) => {
    try {
        if (!data.groupId) {
            return { EM: 'Error with empty GroupId', EC: 1, DT: 'group' };
        }

        let user = await db.User.findByPk(data.id);
        if (!user) return { EM: 'User not found', EC: 2, DT: '' };

        await user.update({
            username: data.username,
            image: data.image,          // 🔹 cập nhật đường dẫn ảnh
            address: data.address,
            sex: data.sex,
            groupId: data.groupId
        });

        return { EM: 'Update user succeeds', EC: 0, DT: '' };
    } catch (e) {
        console.log(e);
        return { EM: 'something wrongs with services', EC: 1, DT: [] };
    }
};


const deleteUser = async (id) => {
    try {
        let user = await db.User.findOne({
            where: { id: id }
        })
        if (user) {
            await user.destroy();
            return {
                EM: 'Delete user success',
                EC: 0,
                DT: []
            }
        } else {
            return {
                EM: 'User not exist',
                EC: 2,
                DT: []
            }
        }

    } catch (e) {
        console.log(e)
        return {
            EM: 'error from service',
            EC: 1,
            DT: []
        }

    }
}

module.exports = {
    getAllUser, createNewUser, updateUser, deleteUser, getUserWithPagination
}