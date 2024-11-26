import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Content-Type', /json/)
      .expect((res) => {
        const examList = res.body;
        expect(examList).toHaveProperty('two-sum-two');
        expect(examList).toHaveProperty('hide-cc-number');
        expect(examList).toHaveProperty('move-zeroes');
      });
  });

  it('/two-sum-two (POST)', () => {
    return request(app.getHttpServer())
      .post('/two-sum-two')
      .send({ 'nums': [2, 11, 7, 15], 'target': 18 })
      .expect(201)
      .expect('Content-Type', /json/)
      .expect((res) => {
        expect(res.body).toEqual({ 'nums': [11, 7] });
      });
  });

  it('/hide-cc-number (POST)', () => {
    return request(app.getHttpServer())
      .post('/hide-cc-number')
      .send({ 'ccNum': '1234 5678 9012 3456' })
      .expect(201)
      .expect('Content-Type', /json/)
      .expect((res) => {
        expect(res.body).toEqual({ 'ccNum': '************3456' });
      });
  });

  it('/move-zeroes (POST)', () => {
    return request(app.getHttpServer())
      .post('/move-zeroes')
      .send({ 'nums': [0, 1, 0, 3, 12] })
      .expect(201)
      .expect('Content-Type', /json/)
      .expect((res) => {
        expect(res.body).toEqual({ 'nums': [1, 3, 12, 0, 0] });
      });
  });
});
