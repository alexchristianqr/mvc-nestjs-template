import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as supertest from 'supertest';
import { AppModule } from '../src/app.module';

const baseUrl = '/examples';

describe('ExampleController (e2e)', () => {
  // Set
  let app: INestApplication;
  let exampleId = null;
  let request;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = moduleFixture.createNestApplication();
    request = supertest(app.getHttpServer());
    await app.init();
  });

  it('/examples (GET)', async () => {
    // Request
    const url = `${baseUrl}`;

    // API
    const response = await request.get(url);

    // Test
    expect(response.status).toBe(200);
    expect(response.body.code).toEqual(expect.any(Number));
    expect(response.body.success).toEqual(expect.any(Boolean));
    expect(response.body.createdAt).toEqual(expect.any(String));
    expect(response.body.message).toEqual(expect.any(String));
    expect(response.body.method).toEqual(expect.any(String));
    expect(response.body.result).toEqual(expect.any(Array));
  });

  it('/examples (POST)', async () => {
    // Request
    const url = `${baseUrl}`;

    // API
    const response = await request.post(url);

    // Test
    expect(response.status).toBe(200);
    expect(response.body.code).toEqual(expect.any(Number));
    expect(response.body.success).toEqual(expect.any(Boolean));
    expect(response.body.createdAt).toEqual(expect.any(String));
    expect(response.body.message).toEqual(expect.any(String));
    expect(response.body.method).toEqual(expect.any(String));
    expect(response.body.result).toEqual(expect.any(Object));
    exampleId = response.body.result._id;
  });

  it('/examples (PUT)', async () => {
    // Request
    const url = `${baseUrl}/${exampleId}`;
    const payload = {};

    // API
    const response = await request.put(url, payload);

    // Test
    expect(response.status).toBe(200);
    expect(response.body.code).toEqual(expect.any(Number));
    expect(response.body.success).toEqual(expect.any(Boolean));
    expect(response.body.createdAt).toEqual(expect.any(String));
    expect(response.body.message).toEqual(expect.any(String));
    expect(response.body.method).toEqual(expect.any(String));
    expect(response.body.result).toEqual(expect.any(Object));
  });

  it('/examples (DELETE)', async () => {
    // Request
    const url = `${baseUrl}/${exampleId}`;

    // API
    const response = await request.delete(url);

    // Test
    expect(response.status).toBe(200);
    expect(response.body.code).toEqual(expect.any(Number));
    expect(response.body.success).toEqual(expect.any(Boolean));
    expect(response.body.createdAt).toEqual(expect.any(String));
    expect(response.body.message).toEqual(expect.any(String));
    expect(response.body.method).toEqual(expect.any(String));
    expect(response.body.result).toEqual(expect.any(Object));
  });

  afterAll(async () => {
    await app.close();
  });
});
