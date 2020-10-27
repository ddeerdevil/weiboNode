/**
 * @description user api
 * @author dc酱
 */

const router = require('koa-router')();
const { isExist,
        register,
        login,
        deleteCurrentUser,
        changeInfo,
        changePassword,
        logout } = require('../../controller/user')
const userValidate = require('../../validator/user')
const genValidator = require('../../middlewares/validator');
const user = require('../../services/user');
const { isTest } = require("../../utils/env");
const { loginRedirect, loginCheck } = require('../../middlewares/loginChecks');
router.prefix('/api/user');

// 注册路由
router.post('/register', genValidator(userValidate) , async (ctx, next) => {
    const { userName, password, gender } = ctx.request.body;
    // controller
    ctx.body = await register({
        userName,
        password,
        gender
    })
})

// 用户名是否存在
router.post('/isExist', async(ctx, next) => {
    const { userName } = ctx.request.body;
    ctx.body = await isExist(userName);
})

// 登录
router.post('/login', async (ctx, next) => {
    const { userName, password } = ctx.request.body;
    // controller
    ctx.body = await login(ctx, userName, password);
})

router.post('/delete', loginRedirect, async (ctx, next) => {
    if (isTest) {
        const { userName } = ctx.session.userInfo;
        ctx.body = await deleteCurrentUser(userName);
    }
})

// 修改个人信息
router.patch('/changeInfo', loginCheck, genValidator(userValidate), async (ctx, next) => {
    const { nickName, city, picture } = ctx.request.body
    // controller
    ctx.body = await changeInfo(ctx, { nickName, city, picture})
})

// 修改个人信息
router.patch('/changePassword', loginCheck, genValidator(userValidate), async (ctx, next) => {
    const { password, newPassword } = ctx.request.body
    const { userName } = ctx.session.userInfo
    // controller
    ctx.body = await changePassword(userName, password, newPassword)
})

router.post('/logout', loginCheck, async (ctx, next) => {
    ctx.body = await logout(ctx)
})

module.exports = router;
