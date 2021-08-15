'use strict';

const supertest = require('supertest');
const server = require('../server.js');
const request = supertest(server.server);

describe('Express Server', () => {
    it('Should check the Every Thing Is Working Good Successfully', async () => {
        // arrange
        let status = 200;
        let param = '/';
        let text = "it's working";
        // act
        const response = await request.get(param);
        // assert
        expect(response.status).toBe(status);
        expect(response.text).toBe(text);
    });

    it('Should check the data response it work Successfully', async () => {
        // arrange
        let status = 200;
        let param = '/data';
        // act
        const response = await request.get(param);
        // assert
        expect(response.status).toBe(status);
        expect(typeof response.body).toEqual('object');
    });

    it('Should check the 404 not found error', async () => {
        // arrange
        let status = 404;
        let param = '/error';
        // act
        const response = await request.get(param);
        // assert
        expect(response.status).toBe(status);
    });

    it('Should check the 500 Internal Server Error', async () => {
        // arrange
        let status = 500;
        let param = '/bad';
        // act
        const response = await request.get(param);
        // assert
        expect(response.status).toBe(status);
    });

    it('Should check Listing to the port', async () => {
        // arrange

        // act

        // assert
    });
})