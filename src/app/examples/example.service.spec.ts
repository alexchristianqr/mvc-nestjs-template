import { TestingModule } from '@nestjs/testing'
import { Example, ExampleSchema } from './example.model'
import { ExampleService } from './example.service'
import { testUtil } from '../common/utils/test.util'
import { CreateExampleDto, UpdateExampleDto } from './example.dto'

describe('ExampleService', () => {
  // Set
  let exampleService: ExampleService
  let app: TestingModule
  let exampleId: string = null

  beforeAll(async () => {
    app = await testUtil([ExampleService],
      [{ name: Example.name, schema: ExampleSchema }])
    exampleService = app.get<ExampleService>(ExampleService)
  })

  it('getExamples', async () => {
    // Request
    const payload: object = {
      page: 1,
      perPage: 10,
    }

    // Service
    const response = await exampleService.getExamples()

    // Unit Test
    expect(response.message).toEqual(expect.any(String))
    expect(response.result).toEqual(expect.any(Array))
  })

  it('createExample', async () => {
    // Request
    const payload: CreateExampleDto = {
      name: 'Title #1',
    }

    // Service
    const response = await exampleService.createExample(payload)
    exampleId = response.result._id

    // Unit Test
    expect(response.message).toEqual(expect.any(String))
    expect(response.result).toEqual(expect.any(Object))
  })

  it('getExampleById', async () => {
    // Service
    const response = await exampleService.getExampleById(exampleId)

    // Unit Test
    expect(response.message).toEqual(expect.any(String))
    expect(response.result).toEqual(expect.any(Object))
  })

  it('updateExample', async () => {
    // Request
    const payload: UpdateExampleDto = {
      name: 'Title #5',
    }

    // Service
    const response = await exampleService.updateExample(exampleId, payload)

    // Unit Test
    expect(response.message).toEqual(expect.any(String))
    expect(response.result).toEqual(expect.any(Object))
  })

  it('deleteExample', async () => {
    // Service
    const response = await exampleService.deleteExample(exampleId)

    // Unit Test
    expect(response.message).toEqual(expect.any(String))
    expect(response.result).toEqual(expect.any(Object))
  })

  afterAll(async () => {
    await app.close()
  })
})
