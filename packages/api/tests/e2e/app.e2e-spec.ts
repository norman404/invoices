import { INestApplication } from '@nestjs/common'
import * as request from 'supertest'
import { setupE2ETestApp } from './setup-e2e'

describe('AppController (e2e)', () => {
  let app: INestApplication

  beforeAll(async () => {
    app = await setupE2ETestApp()
  })
  beforeEach(() => jest.clearAllMocks())

  afterAll(async () => {
    if (app?.close) {
      await app.close()
    }
  })

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(404)
      .expect('{"message":"Cannot GET /","error":"Not Found","statusCode":404}')
  })
})