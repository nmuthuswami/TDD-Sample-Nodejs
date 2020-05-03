/* This class holds test methods for api related calls */

const request = require('supertest');
const app = require('../server/server');

describe('GET /', ()=>{
    it('return json response', ()=>{
        return request(app)
        .get('/')
        .expect(200)
        .expect('Content-Type',/json/)
        .expect('{"text":"Hi this is welcome home page"}')
    });
})

describe('GET /abc/123', ()=>{
    it('return json response', ()=>{
        return request(app)
        .get('/abc/123')
        .expect(404)
        .expect('Content-Type',/text/)
        .expect('API Url not found')
    });
})

describe('GET /api/getDirDetails',()=>{
    it('return json response', ()=>{
        return request(app)
        .get('/api/getDirDetails')
        .expect(200)
        .expect('Content-Type',/json/)
        .expect('{"fileDetails":[{"fileName":"File1.txt"},{"fileName":"File10.txt"},{"fileName":"File2.txt"},{"fileName":"File3.txt"},{"fileName":"File4.txt"},{"fileName":"File5.txt"},{"fileName":"File6.txt"},{"fileName":"File7.txt"},{"fileName":"File8.txt"},{"fileName":"File9.txt"}]}')
    })
});

describe('GET /api/getFileContents',()=>{
    it('return json response by passing the filename to api -> getFileContent', ()=>{
        return request(app)
        .get('/api/getFileContents/File1.txt')
        .expect(200)
        .expect('Content-Type',/json/)
        .expect('{"fileContents":[{"firstname":"User_first11","lastname":"User_last11","email":"User11@xxx.co.uk","mobile":"9999999911"},{"firstname":"User_first12","lastname":"User_last12","email":"User12@xxx.co.uk","mobile":"9999999912"},{"firstname":"User_first13","lastname":"User_last13","email":"User13@xxx.co.uk","mobile":"9999999913"},{"firstname":"User_first14","lastname":"User_last14","email":"User14@xxx.co.uk","mobile":"9999999914"},{"firstname":"User_first15","lastname":"User_last15","email":"User15@xxx.co.uk","mobile":"9999999915"},{"firstname":"User_first16","lastname":"User_last16","email":"User16@xxx.co.uk","mobile":"9999999916"},{"firstname":"User_first17","lastname":"User_last17","email":"User17@xxx.co.uk","mobile":"9999999917"},{"firstname":"User_first18","lastname":"User_last18","email":"User18@xxx.co.uk","mobile":"9999999918"},{"firstname":"User_first19","lastname":"User_last19","email":"User19@xxx.co.uk","mobile":"9999999919"},{"firstname":"User_first110","lastname":"User_last110","email":"User110@xxx.co.uk","mobile":"99999999110"}]}')
    })
});

describe('GET /api/getFileContent Page Not Found',()=>{
    it('return Page not found response by not passing the filename to api -> getFileContent', ()=>{
        return request(app)
        .get('/api/getFileContents/')
        .expect(404)
        .expect('Content-Type',/text/)
        .expect('API Url not found')
    })
});

describe('POST /api/writecontent',()=>{
    it('write contents to redis and response code 200',()=>{
        return request(app)
        .post('/api/writecontent')
        .send({name:'jeeya'})
        .set('Accept','application/json')
        .expect(200)
        .expect('Content-Type',/json/)
        .expect('{"text":"OK"}')
    })
});

describe('POST /api/writecontent',()=>{
    let body = {'file1.txt' : '[{firstname : Jeeya, lastname : nirmalanand, mobile : 9884110244},{firstname:Muthuswami,lastname:vinayagam,mobile:9884110244}]'}
    it("write contents to redis and response code 200 by sending body as {name:'jeeya'}",()=>{
        return request(app)
        .post('/api/writecontent')
        .send(body)
        .set('Accept','application/json')
        .expect(200)
        .expect('Content-Type',/json/)
        .expect('{"text":"OK"}')
    })
});