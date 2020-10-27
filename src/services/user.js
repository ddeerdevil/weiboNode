/**
 * @description user service
 * @author dc酱
 */

const user = require('../controller/user');
const { User } = require('../db/model/index');
const { formatUser } = require('./_format')
/**
 * 获取用户信息
 * @param {string} userName
 * @param {string} password
 */
async function getUserInfo(userName, password) {
    const whereOpt = {
        userName
    }
    if (password) {
        Object.assign(whereOpt, { password });
    }

    const result = await User.findOne({
        attributes: ['id', 'userName', 'nickName', 'picture', 'city'],
        where: whereOpt
    })

    if (result == null) {
        return result
    }

    // 格式化
    const formatRes = formatUser(result.dataValues);

    return formatRes;
}

async function createUser({ userName, password, gender = 3, nickName }) {
    const result = User.create({
        userName,
        password,
        nickName: nickName ? nickName : userName,
        gender
    })
    return result.dataValues;
}

async function deleteUser(userName) {
    const result = await User.destroy({
        where: {
            userName
        }
    })
    return result > 0;
}

async function updateUser(
    { newPassword, newNickName, newPicture, newCity },
    { userName, password }
) {
    const updateData = {}
    if (newPassword) {
        updateData.password = newPassword
    }
    if (newNickName) {
        updateData.nickName = newNickName
    }
    if (newPicture) {
        updateData.picture = newPicture
    }
    if (newCity) {
        updateData.city = newCity
    }

    const whereData = {
        userName
    }
    if (password) {
        whereData.password = password
    }

    const result = await User.update(updateData, {
        where: whereData
    })

    return result[0] > 0
}

module.exports = {
    getUserInfo,
    createUser,
    deleteUser,
    updateUser
}