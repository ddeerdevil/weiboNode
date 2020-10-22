/*
 * @Descripttion: 
/**
 * @description jest server
 * @author sorrycc
 */

const request = require('supertest');
const server = require('../src/app').callback()

module.exports = request(server);