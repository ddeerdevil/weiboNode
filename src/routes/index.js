/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-10-18 09:59:45
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-10-26 21:15:21
 */
const router = require('koa-router')()
const { loginRedirect, loginCheck } = require('../middlewares/loginChecks');

router.get('/', loginRedirect , async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!',
    isMe: false,
    blogList: [
      {
        id: 1,
        title: 'aaa'
      },
      {
        id: 2,
        title: 'bbb'
      },
      {
        id: 3,
        title: 'ccc'
      }
    ]
  })
})

router.get('/json', loginCheck, async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json',
  }
})

module.exports = router
