import { INestApplication } from '@nestjs/common'
import * as request from 'supertest'
import { setupE2ETestApp } from '../../setup-e2e'

describe('Auth Test (e2e)', () => {
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
  const validUser = {
    email: 'testuser@example.com',
    password: 'TestPassword123'
  }

  it('should login successfully with valid credentials', async () => {
    const response = await request(app.getHttpServer())
      .post('/api/auth/login')
      .send(validUser)
      .expect(201)
    expect(response.body).toHaveProperty('access_token')
  })

  it('should return 401 for invalid credentials', async () => {
    await request(app.getHttpServer())
      .post('/api/auth/login')
      .send({ ...validUser, password: 'wrongpassword' })
      .expect(401)
  })

  it('should return 400 for missing fields', async () => {
    await request(app.getHttpServer())
      .post('/api/auth/login')
      .send({ email: 'testuser@example.com' }) // falta password
      .expect(400)
  })

  it('should return 400 for invalid email format', async () => {
    await request(app.getHttpServer())
      .post('/api/auth/login')
      .send({ email: 'invalid', password: 'TestPassword123' })
      .expect(400)
  })

  it('should return 400 for empty body', async () => {
    await request(app.getHttpServer())
      .post('/api/auth/login')
      .send({})
      .expect(400)
  })
})