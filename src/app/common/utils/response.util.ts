import { Request, Response } from 'express'

/**
 * Respuesta personalizada http
 * @param req
 * @param res
 * @param response
 * @return {Promise<*>}
 */
export const sendResponse = (req: Request, res: Response, response: any): any => {
  // Request
  let statusCodeHttp

  // Payload response
  const payload = {
    code: null,
    success: false,
    message: null,
    result: null,
    method: response.method,
    createdAt: new Date(),
  }

  // Try
  if (!response.e) {
    // Set default
    payload['success'] = true
    payload['message'] = response.message
    payload['result'] = response.result

    if (response.status) {
      statusCodeHttp = response.status
    } else {
      statusCodeHttp = 200 // Ok
    }
  }
  // Catch
  else {
    let error
    payload['success'] = false

    if (response.e.response) {
      if (response.e.response.data.error) {
        error = response.e.response.data.error
      } else {
        error = response.e.response.data
      }

      payload['message'] = error.message
      payload['result'] = error
    } else {
      error = response.e

      payload['message'] = error.message
      payload['result'] = error.result

      // Track error
      if (error.stack) {
        payload['result'] = error.stack.split('\n    ')
      }
    }

    if (error.status) {
      // Set default
      switch (error.status) {
        case 200:
          payload['success'] = true
          statusCodeHttp = 200 // Ok
          break
        case 400:
          statusCodeHttp = 400 // Bad Request
          break
        case 401:
          statusCodeHttp = 401 // Unauthorized
          break
        case 402:
          statusCodeHttp = 402 // Payment Required
          break
        case 403:
          statusCodeHttp = 403 // Forbidden
          break
        case 404:
          statusCodeHttp = 404 // Not Found
          break
        default:
          statusCodeHttp = 500 // Internal Server
      }
    } else {
      statusCodeHttp = 500 // Internal Server
    }
  }

  // Crear LOG en mongoDB database
  payload.code = statusCodeHttp // Set status code http
  // LoggerService.createLogger({ req, res }, { ...payload });

  // Set enviroment ENV
  if (process.env.NODE_ENV === 'production') {
    delete payload.method
  }

  // Print log success = TRUE
  if (payload['success']) {
    console.log('[sendResponse]', payload)
  }

  // Print log success = FALSE
  if (!payload['success']) {
    console.error('[sendResponse]', payload)
  }

  // Return response express
  return res.status(statusCodeHttp).send(payload)
}
