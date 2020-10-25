/**
 * @description data format
 * @author dc酱
 */

const { DEFAULT_PICTURE } = require('../conf/constant')
/**
 * 格式化用户头像
 * @param {Object} user 用户对象
 * @returns
 */
function _formatUserPicture(user) {
    if (user.picture == null) {
        user.picture = DEFAULT_PICTURE
    }
    return user
}

/**
 * format user
 *
 * @param {Array|Object} list 单个用户或用户数组
 */
function formatUser(list) {
    if (list == null) {
        return list
    }

    if (list instanceof Array) {
        return list.map(_formatUserPicture)
    }

    return _formatUserPicture(list)
}

module.exports = {
    formatUser
}