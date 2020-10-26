/**
 * @description 登录校验中间件
 * @author dc酱
 */

const { ErrorModel } = require('../model/ResModel');
const { loginCheckFailInfo } = require('../model/ErrorInfo');

/**
 * api login check
 * @param {Object} ctx
 * @param {Function} next
 */
async function loginCheck(ctx, next) {
    if (ctx.session && ctx.session.userInfo) {
        await next()
        return
    }

    ctx.body = new ErrorModel(loginCheckFailInfo)
}

async function loginRedirect(ctx, next) {
    if (ctx.session && ctx.session.userInfo) {
        await next()
        return
    }

    const curUrl = ctx.url;
    ctx.redirect('/login?url=' + encodeURIComponent(curUrl));
}

module.exports = {
    loginCheck,
    loginRedirect
}