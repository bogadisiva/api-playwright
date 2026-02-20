import { test, expect } from '@playwright/test';
import bookingData from '../test-data/api-data.json';

test.skip('create a new booking using static data', async ({ request }) => {
    const response = await request.post('/booking', {
        data: {
            "firstname": "first API Testing 03",
            "lastname": "last API Testing 03",
            "totalprice": 1000,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2018-01-01",
                "checkout": "2019-01-01"
            },
            "additionalneeds": "super bowls"
        }
    })
    const responseBody = await response.json();
    console.log(responseBody);
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);


    expect(responseBody.booking).toHaveProperty('firstname','first API Testing 03');
    expect(responseBody.booking).toHaveProperty('lastname','last API Testing 03');
    expect(responseBody.booking).toHaveProperty('totalprice',1000); 
    expect(responseBody.booking).toHaveProperty('depositpaid',true);
    expect(responseBody.booking.bookingdates).toHaveProperty('checkin','2018-01-01');
    expect(responseBody.booking.bookingdates).toHaveProperty('checkout','2019-01-01');
    expect(responseBody.booking).toHaveProperty('additionalneeds','super bowls');   
    






})

test('create a new booking using static data from json file test data', async ({ request }) => {
    const response = await request.post('/booking', {
        data:bookingData
    })
    const responseBody = await response.json();
    console.log(responseBody);
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);


    expect(responseBody.booking).toHaveProperty('firstname','first API Testing 04');
    expect(responseBody.booking).toHaveProperty('lastname','last API Testing 04');
    expect(responseBody.booking).toHaveProperty('totalprice',1000); 
    expect(responseBody.booking).toHaveProperty('depositpaid',true);
    expect(responseBody.booking.bookingdates).toHaveProperty('checkin','2018-01-01');
    expect(responseBody.booking.bookingdates).toHaveProperty('checkout','2019-01-01');
    expect(responseBody.booking).toHaveProperty('additionalneeds','super bowls');   
    

})