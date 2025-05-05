import { INestApplication, Type, ValidationPipe } from '@nestjs/common'
import { Test, TestingModule } from '@nestjs/testing'
import { AppModule } from 'src/app.module'
// import { getRepositoryToken } from '@nestjs/typeorm'

type MockProviderMap = Map<Type<unknown> | string, unknown>

export async function setupE2ETestApp (
  mocks: MockProviderMap = new Map()
): Promise<INestApplication> {
  let testingModuleBuilder = Test.createTestingModule({
    imports: [AppModule]
  })

  for (const [providerOrEntity, mockValue] of mocks.entries()) {
    // if (typeof providerOrEntity === 'string') {
      // Si es string, es un provider normal
      testingModuleBuilder = testingModuleBuilder
        .overrideProvider(providerOrEntity)
        .useValue(mockValue)
    //} else {
    //   // Si es clase, asumimos que es un Entity (Repository)
    //   testingModuleBuilder = testingModuleBuilder
    //     .overrideProvider(getRepositoryToken(providerOrEntity))
    //     .useValue(mockValue)
    // }
  }

  const moduleFixture: TestingModule = await testingModuleBuilder.compile()
  const app = moduleFixture.createNestApplication()
  app.setGlobalPrefix('api')
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    transform: true,
    forbidUnknownValues: true,
    forbidNonWhitelisted: true,
    transformOptions: {
      enableImplicitConversion: true
    }
  }))

  await app.init()
  return app
}