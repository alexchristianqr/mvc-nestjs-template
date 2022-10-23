import { Test, TestingModule } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'
import * as supertest from 'supertest'
import { AppModule } from '../../src/app.module'

// import app from '../../src/main'
// import supertest from 'supertest';
// import { Test, TestingModule } from '@nestjs/testing';
// import { AppModule } from '../../src/app.module';

// Set
// const baseUrl = '/examples';
let app: INestApplication
// let exampleId: string;
let request

beforeAll(async () => {
  const moduleFixture: TestingModule = await Test.createTestingModule({
    imports: [AppModule],
  }).compile()
  app = moduleFixture.createNestApplication()
  request = supertest(app.getHttpServer())
})

export {
  app,
  request,
}

