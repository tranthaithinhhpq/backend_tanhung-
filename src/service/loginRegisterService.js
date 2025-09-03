import 'dotenv/config'
import db from "../models/index.js";
import bcrypt from 'bcryptjs';
import { Op } from 'sequelize';
import JWTAction from '../middleware/JWTAction.js';
import JWTService from './JWTService.js';

const { getGroupWithRoles } = JWTService;

const { createJWT } = JWTAction;

const salt = bcrypt.genSaltSync(10);

const hashUserPassword = (userPassword) => {
    let hashedPassword = bcrypt.hashSync(userPassword, salt);
    return hashedPassword;
}
const checkEmailExist = async (userEmail) => {
    //check email/phoneNumber are exist
    let user = await db.User.findOne({
        where: { email: userEmail }
    })
    if (user) {
        return true;
    }
    return false;

}

const checkPhoneExist = async (userPhone) => {
    let user = await db.User.findOne({
        where: { phone: userPhone }
    })
    if (user) {
        return true;
    }
    return false;

}
const registerNewUser = async (rawUserData) => {
    try {
        //check email/phoneNumber are exist
        let isEmailExist = await checkEmailExist(rawUserData.email);
        if (isEmailExist === true) {
            return {
                EM: 'The email is already existed',
                EC: 1,

            }
        }
        let isPhoneExist = await checkPhoneExist(rawUserData.phone);
        if (isPhoneExist === true) {
            return {
                EM: 'The phone is already existed',
                EC: 1
            }
        }
        //hash user password
        let hashPassword = hashUserPassword(rawUserData.password);
        //create new user
        await db.User.create({
            email: rawUserData.email,
            username: rawUserData.username,
            password: hashPassword,
            phone: rawUserData.phone,
            groupId: 4
        })
        return {
            EM: 'A user is created successfully',
            EC: 0
        }

    } catch (error) {
        console.log(error)
        return {
            EM: 'Something wrong in service ...',
            EC: -2
        }

    }


}
const checkPassword = (inputPassword, hashPassword) => {
    return bcrypt.compareSync(inputPassword, hashPassword);
}
const handleLogin = async (rawData) => {
    try {
        let user = await db.User.findOne({
            where: {
                [Op.or]: [
                    { email: rawData.valueLogin },
                    { phone: rawData.valueLogin }
                ]
            }
        })
        if (user) {


            let isCorrectPassword = checkPassword(rawData.password, user.password);
            if (isCorrectPassword === true) {
                // test roles:
                let groupWithRoles = await getGroupWithRoles(user);

                let payload = {
                    id: user.id,             // 🔑 thêm id user
                    email: user.email,
                    username: user.username,
                    groupWithRoles,
                    // expiresIn: process.env.JWT_EXPIRES_IN
                };

                let token = createJWT(payload);
                return {
                    EM: 'ok!',
                    EC: 0,
                    DT: {
                        access_token: token,
                        groupWithRoles,
                        email: user.email,
                        username: user.username,
                        id: user.id   // ✅ có thể trả về cho FE dùng luôn
                    }
                };

            }
        }

        return {
            EM: 'your email/phone number or password is incorrect',
            EC: 1,
            DT: ''

        }

    } catch (error) {
        console.log(error)
        return {
            EM: 'Something wrongs in service duma... ',
            EC: -2
        }

    }

}


export default {
    registerNewUser, handleLogin, hashUserPassword, checkEmailExist, checkPhoneExist
}