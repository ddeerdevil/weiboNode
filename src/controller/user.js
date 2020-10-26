/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-10-25 08:31:40
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-10-26 20:52:32
 */
/**
 * @description user controller
 * @author dc 酱
 */

const { getUserInfo, createUser } = require('../services/user')
const { SuccessModel, ErrorModel } = require('../model/ResModel');
const {
    registerUserNameNotExistInfo,
    registerUserNameExistInfo,
    loginFailInfo
} = require('../model/ErrorInfo')
const doCrypto = require('../utils/cryp')

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
         return ErrorModel(registerUserNameExistInfo)
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

module.exports = {
    isExist,
    register,
    login
}