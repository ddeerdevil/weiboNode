/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-10-27 19:20:23
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-11-25 20:28:13
 */
const server = require('../server');

// 用户信息
const userName = `u_${Date.now()}`;
const password = `p_${Date.now()}`;
const testUser = {
    userName,
    password,
    nickName: userName,
    gender: 1
}

let COOKIE = ''

test('register a user', async () => {
    const res = await server
        .post('/api/user/register').send(testUser);
    expect(res.body.errno).toBe(0)
})

test('重复注册', async () => {
    const res = await server
        .post('/api/user/register').send(testUser);
    expect(res.body.errno).not.toBe(0)
})

test('判断是否重复', async () => {
    const res = await server
        .post('/api/user/isExist').send({ userName });
    expect(res.body.errno).toBe(0)
})

test('schema', async () => {
    const res = await server
        .post('/api/user/register').send({
            userName: '123',
            password: 'a',
            gender: 'mail'
        });
    expect(res.body.errno).not.toBe(0);
})

test('login', async () => {
    const res = await server
        .post('/api/user/login').send({
            userName,
            password
        });
    expect(res.body.errno).toBe(0);
    COOKIE = res.headers['set-cookie'].join(';');
})

test('修改基本信息', async () => {
    const res = await server
        .patch('/api/user/changeInfo')
        .send({
            nickName: '昵称',
            city: '你的城市',
            picture: '/test.png'
        })
        .set('cookie', COOKIE)
        expect(res.body.errno).toBe(0)
})

test('修改密码', async () => {
    const res = await server
        .patch('/api/user/changePassword')
        .send({
            password,
            newPassword: `p_${Date.now()}`
        })
        .set('cookie', COOKIE)
        expect(res.body.errno).toBe(0)
})

test('delete User', async () => {
    const res = await server
        .post('/api/user/delete').set('cookie', COOKIE);
    expect(res.body.errno).toBe(0);
})

test('退出登录', async () => {
    const res = await server
        .post('/api/user/logout')
        .set('cookie', COOKIE)
        expect(res.body.errno).toBe(0)
})

test('再次判断是否存在', async () => {
    const res = await server
        .post('/api/user/isExist').send({ userName });
    expect(res.body.errno).not.toBe(0)
})