/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-10-22 20:26:44
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-10-22 22:00:08
 */
/**
 * @description 存储配置
 * @author sorryzz
 */

const { isProd } = require('../utils/env');

let REDIS_CONF = {
    port: 6379,
    host: '127.0.0.1'
}

let MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: '3306',
    database: 'koa2_weibo_db'
}

if (isProd) {
    REDIS_CONF = {
        // 线上 redis 地址端口
        port: 6379,
        host: '127.0.0.1'
    }

    MYSQL_CONF = {
        // 线上 mysql
        host: 'localhost',
        user: 'root',
        password: 'root',
        port: '3306',
        database: 'koa2_weibo_db'
    }
}

module.exports = {
    REDIS_CONF,
    MYSQL_CONF
}