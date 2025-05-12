import { INestApplication } from '@nestjs/common'
import * as request from 'supertest'
import { setupE2ETestApp } from '../../setup-e2e'

interface LoginResponse {
  access_token: string
}

describe('Token Validation (e2e)', () => {
  let app: INestApplication
  let accessToken: string

  const validUser = {
    email: 'testuser@example.com',
    password: 'TestPassword123'
  }

  beforeAll(async () => {
    app = await setupE2ETestApp()

    // Login para obtener el token
    const loginResponse = await request(app.getHttpServer())
      .post('/api/auth/login')
      .send(validUser)
      .expect(201)
    const body = loginResponse.body as LoginResponse
    accessToken = body.access_token
  })

  afterAll(async () => {
    await app.close()
  })

  it('should validate token successfully', async () => {
    const response = await request(app.getHttpServer())
      .get('/api/auth/validate-token')
      .set('Authorization', `Bearer ${accessToken}`)
      .expect(200)

    expect(response.body).toHaveProperty('status', 'success')
    expect(response.body).toHaveProperty('userId')
    expect(response.body).toHaveProperty('email')
  })

  it('should return 401 if token is missing', async () => {
    await request(app.getHttpServer())
      .get('/api/auth/validate-token')
      .expect(401)
  })

  it('should return 401 if token is invalid', async () => {
    await request(app.getHttpServer())
      .get('/api/auth/validate-token')
      .set('Authorization', 'Bearer invalid.token.here')
      .expect(401)
  })
})