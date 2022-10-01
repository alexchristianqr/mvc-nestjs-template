import { TestingModule } from '@nestjs/testing'
import { Example, ExampleSchema } from './example.model'
import { ExampleService } from './example.service'
import { testUtil } from '../common/utils/test.util'
import { CreateExampleDto } from './dto/create-example.dto'
import { UpdateExampleDto } from './dto/update-example.dto'

describe('ExampleService', () => {
  // Set
  let exampleService: ExampleService
  let app: TestingModule

  beforeAll(async () => {
    app = await testUtil([ExampleService], [{ name: Example.name, schema: ExampleSchema }])
    exampleService = app.get<ExampleService>(ExampleService)
  })

  describe('root', () => {
    // Set
    let exampleId: string = null

    it('getExamples', async () => {
      // Service
      const response = await exampleService.getExamples()
      console.log({ response })

      // Tests
      expect(response).toEqual(expect.any(Object))
    })

    it('createExample', async () => {
      // Request
      const payload: CreateExampleDto = {
        name: 'Title #1',
      }

      // Service
      const response = await exampleService.createExample(payload)
      exampleId = response._id

      // Tests
      expect(response).toEqual(expect.any(Object))
    })

    it('getExampleById', async () => {
      // Service
      const response = await exampleService.getExampleById(exampleId)
      console.log({ response })

      // Tests
      expect(response).toEqual(expect.any(Object))
    })

    it('updateExample', async () => {
      // Request
      const payload: UpdateExampleDto = {
        _id: exampleId,
        name: 'Title #5',
      }

      // Service
      const response = await exampleService.updateExample(exampleId, payload)
      console.log({ response })

      // Tests
      expect(response).toEqual(expect.any(Object))
    })

    it('deleteExample', async () => {
      // Service
      const response = await exampleService.deleteExample(exampleId)
      console.log({ response })

      // Tests
      expect(response).toEqual(expect.any(Object))
    })
  })

  afterAll(async () => {
    await app.close()
  })
})
