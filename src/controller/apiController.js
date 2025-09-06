import loginRegisterService from '../service/loginRegisterService.js';
const testApi = (req, res) => {
    return res.status(200).json({
        message: 'ok',
        data: 'test api'
    })

}

import db from '../models/index.js';
import bcrypt from 'bcryptjs';

const handleRegister = async (req, res) => {
    try {
        // check required
        if (!req.body.email || !req.body.phone || !req.body.password)
            return res.status(200).json({
                EM: 'Missing required parameters', // error message
                EC: '1', // error code
                DT: '', //data
            })
        // check password length 
        if (req.body.password && req.body.password.length < 3)
            return res.status(200).json({
                EM: 'Your password must more than 3 letter', // error message
                EC: '1', // error code
                DT: '', //data
            })

        //service: create user
        let data = await loginRegisterService.registerNewUser(req.body)
        return res.status(200).json({
            EM: data.EM, // error message
            EC: data.EC, // error code
            DT: '', //data
        })

    } catch (e) {
        return res.status(500).json({
            EM: 'error from server', // error message
            EC: '-1', // error code
            DT: '', //data
        })

    }

}


const handleLogin = async (req, res) => {

    try {
        let data = await loginRegisterService.handleLogin(req.body);
        // set cookie
        if (data && data.DT && data.DT.access_token) {
            res.cookie("jwt", data.DT.access_token, {
                httpOnly: true,
                maxAge: 60 * 60 * 1000 // 1 hour in milliseconds
            });
        }

        return res.status(200).json({
            EM: data.EM, // error message
            EC: data.EC, //error code
            DT: data.DT, //data
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            EM: 'error from server', // error message
            EC: '-1', // error code
            DT: '', data
        })

    }


}

const handleLogout = (req, res) => {
    try {
        res.clearCookie("jwt");
        return res.status(200).json({
            EM: 'clear cookies done!', // error message
            EC: 0,                    // error code
            DT: '',                   // data
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            EM: 'error from server', // error message
            EC: -1,                  // error code
            DT: '',                  // data
        });
    }
};


const changePassword = async (req, res) => {
    try {
        const { oldPassword, newPassword } = req.body;
        const userId = req.user?.id;

        if (!userId) {
            return res.status(400).json({
                EC: 1,
                EM: "Token không chứa id người dùng",
                DT: null
            });
        }

        const user = await db.User.findByPk(userId);
        if (!user) {
            return res.status(404).json({
                EC: 1,
                EM: `Người dùng id=${userId} không tồn tại`,
                DT: null
            });
        }

        const isMatch = await bcrypt.compare(oldPassword, user.password);
        if (!isMatch) {
            return res.status(400).json({
                EC: 1,
                EM: "Mật khẩu hiện tại không đúng",
                DT: null
            });
        }

        if (oldPassword === newPassword) {
            return res.status(400).json({
                EC: 1,
                EM: "Mật khẩu mới không được trùng mật khẩu cũ",
                DT: null
            });
        }

        if (newPassword.length < 6) {
            return res.status(400).json({
                EC: 1,
                EM: "Mật khẩu mới phải có ít nhất 6 ký tự",
                DT: null
            });
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);
        await user.update({ password: hashedPassword });

        return res.status(200).json({
            EC: 0,
            EM: "Đổi mật khẩu thành công",
            DT: null
        });
    } catch (err) {
        console.error("❌ changePassword error:", err);
        return res.status(500).json({
            EC: -1,
            EM: err.message || "Lỗi server",
            DT: null
        });
    }
};

export default {
    testApi, handleRegister, handleLogin, handleLogout, changePassword
}