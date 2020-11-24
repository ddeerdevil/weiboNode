/**
 * @description 失败信息集合 errno 和 message
 * @author dc酱
 */

module.exports = {
    // 用户名已存在
    registerUserNameExistInfo: {
      errno: 10001,
      message: '用户名已存在'  
    },
    registerFailInfo: {
        errno: 10002,
        message: '注册失败，请重试'
    },
    registerUserNameNotExistInfo: {
        errno: 10003,
        message: '用户名未存在'
    },
    loginFailInfo: {
        errno: 10004,
        message: '登陆失败'
    },
    loginCheckFailInfo: {
        errno: 10005,
        message: '您尚未登录'
    },
    changePasswordFailInfo: {
        errno: 10006,
        message: '修改密码失败'
    },
    uploadFileSizeFailInfo: {
        errno: 10007,
        message: '上传文件过大'
    },
    changeInfoFailInfo: {
        errno: 10008,
        message: '修改基本信息失败'
    },
    jsonSchemaFailInfo: {
        errno: 10009,
        message: '数据格式校验错误'
    },
    deleteUserFailInfo: {
        errno: 10010,
        message: '删除用户失败'
    },
    createBlogFailInfo: {
        errno: 11001,
        message: '创建微博失败，请重试'
    }
}