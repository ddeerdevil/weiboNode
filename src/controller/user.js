/**
 * @description user controller
 * @author dc 酱
 */

const { getUserInfo,
        createUser,
        deleteUser,
        updateUser } = require('../services/user')
const { SuccessModel, ErrorModel } = require('../model/ResModel');
const {
    registerUserNameNotExistInfo,
    registerUserNameExistInfo,
    loginFailInfo,
    deleteUserFailInfo,
    changeInfoFailInfo,
    changePasswordFailInfo
} = require('../model/ErrorInfo')
const doCrypto = require('../utils/cryp');
const user = require('../services/user');

/**
 * 用户名是否存在
 * @param {string} userName 用户名
 */
async function isExist(userName) {
    // 调用services层
    const userInfo = await getUserInfo(userName);
    if (userInfo) {
        return new SuccessModel(userInfo)
    } else {
        return new ErrorModel(registerUserNameNotExistInfo)
    }
    // 统一返回格式
}

async function register({ userName, password, gender }) {
    const userInfo = await getUserInfo(userName)
    if (userInfo) {
         return new ErrorModel(registerUserNameExistInfo)
    }
    // 注册 service
    try {
        await createUser({
            userName,
            password: doCrypto(password),
            gender
        })
        return new SuccessModel()
    } catch (ex) {
        console.error(ex.message, ex.stack)
        return new ErrorModel(registerFailInfo)
    }
}

async function login(ctx, userName, password) {
    // ctx.session.userInfo = xxx

    const userInfo = await getUserInfo(userName, doCrypto(password));
    if (!userInfo) {
        return new ErrorModel(loginFailInfo)
    }
    if (ctx.session.userInfo == null) {
        ctx.session.userInfo = userInfo;
    }
    return new SuccessModel()
}

/**
 * 删除当前用户
 * @param {string} userName
 */
async function deleteCurrentUser(userName) {
    // service
    const result = await deleteUser(userName);
    if (!result) {
        return new ErrorModel(deleteUserFailInfo)
    }
    return new SuccessModel()
}

async function changeInfo(ctx, { nickName, city, picture }) {
    const { userName } = ctx.session.userInfo
    if (!nickName) {
        nickName = userName
    }
    // service
    const result = await updateUser(
        {
            newNickName: nickName,
            newPicture: picture,
            newCity: city
        },
        { userName }
    )
    if (result) {
        Object.assign(ctx.session.userInfo, {
            nickName,
            city,
            picture
        })
        return new SuccessModel()
    }
    return new ErrorModel(changeInfoFailInfo)
}

async function changePassword(userName, password, newPassword) {
    const result = await updateUser(
        {
            newPassword: doCrypto(newPassword)
        },
        {
            userName,
            password: doCrypto(password)
        }
    )
    if (result) {
        return new SuccessModel()
    }
    return new ErrorModel(changePasswordFailInfo)
}

module.exports = {
    isExist,
    register,
    login,
    deleteCurrentUser,
    changeInfo,
    changePassword
}