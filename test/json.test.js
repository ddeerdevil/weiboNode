/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-10-22 21:28:22
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-10-22 21:33:48
 */
/**
 * @description json test
 * @author sorrycc
 */

const server = require ('./server');

test('json return',async () => {
    const res = await server.get('/json')
    expect(res.body).toEqual({
        title: 'koa2 json'
    })
    expect(res.body.title).toBe('koa2 json');
})