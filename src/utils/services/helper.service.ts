import { Model } from 'mongoose';

type myschema = {
  model: Model<any>;
  modelQuery: object;
  paginate: { perPage: string; page: string };
  joins: string[];
  fields: string[];
  sort: boolean;
};

export class HelperService {
  /**
   * Respuesta mixta express
   * @param req
   * @param res
   * @param response
   * @return {Promise<*>}
   */
  static response({ req, res }, response): any {
    // Request
    let statusCodeHttp = null;

    // Payload response
    const payload = {
      code: null,
      success: false,
      message: null,
      result: null,
      method: response.method,
      createdAt: new Date(),
    };

    // Try
    if (!response.e) {
      // Set default
      payload['success'] = true;
      payload['message'] = response.message;
      payload['result'] = response.result;

      if (response.status) {
        statusCodeHttp = response.status;
      } else {
        statusCodeHttp = 200; // Ok
      }
    }
    // Catch
    else {
      let error = null;
      payload['success'] = false;

      if (response.e.response) {
        if (response.e.response.data.error) {
          error = response.e.response.data.error;
        } else {
          error = response.e.response.data;
        }

        payload['message'] = error.message;
        payload['result'] = error;
      } else {
        error = response.e;

        payload['message'] = error.message;
        payload['result'] = error.result;

        // Track error
        if (error.stack) {
          payload['result'] = error.stack.split('\n    ');
        }
      }

      if (error.status) {
        // Set default
        switch (error.status) {
          case 200:
            payload['success'] = true;
            statusCodeHttp = 200; // Ok
            break;
          case 400:
            statusCodeHttp = 400; // Bad Request
            break;
          case 401:
            statusCodeHttp = 401; // Unauthorized
            break;
          case 402:
            statusCodeHttp = 402; // Payment Required
            break;
          case 403:
            statusCodeHttp = 403; // Forbidden
            break;
          case 404:
            statusCodeHttp = 404; // Not Found
            break;
          default:
            statusCodeHttp = 500; // Internal Server
        }
      } else {
        statusCodeHttp = 500; // Internal Server
      }
    }

    // Crear LOG en mongoDB database
    payload.code = statusCodeHttp; // Set status code http
    // LoggerService.createLogger({ req, res }, { ...payload });

    // Set enviroment ENV
    if (process.env.NODE_ENV === 'production') {
      delete payload.method;
    }

    // Print log success = TRUE
    if (payload['success']) {
      console.log('[HelperService.response]', payload);
    }

    // Print log success = FALSE
    if (!payload['success']) {
      console.error('[HelperService.response]', payload);
    }

    // Return response express
    return res.status(statusCodeHttp).send(payload);
  }

  /**
   * Obtener datos de un modelo con o sin paginado
   * @param model
   * @param modelQuery
   * @param paginate
   * @param joins
   * @param fields
   * @param sort
   * @returns {Promise<*>}
   */
  static async getModel({ model, modelQuery, paginate, joins, fields, sort }: myschema): Promise<any> {
    console.log('[HelperService.getModel]');

    let result = null;

    // Modelo con pagina
    if (paginate) {
      // Set
      const perPage = parseInt(paginate.perPage);
      const page = parseInt(paginate.page);

      let sortQuery = {};
      if (sort) {
        sortQuery = sort;
      } else {
        sortQuery = { _id: -1 };
      }

      // Paginar colección
      const dataModel = await model
        .find(modelQuery)
        .select(fields)
        .populate(joins)
        .sort(sortQuery)
        .limit(perPage)
        .skip((page - 1) * perPage);

      // Total
      const totalModel = await model.find(modelQuery).countDocuments();

      // Set variables de paginación
      result = {
        data: dataModel,
        perPage: perPage,
        to: (() => {
          const firstItem = () => {
            return totalModel > 0 ? (page - 1) * perPage : null;
          };
          return totalModel > 0 ? firstItem() + Math.round(page / perPage) : null;
        })(),
        total: totalModel,
        from: (() => {
          const firstItem = () => {
            return totalModel > 0 ? (page - 1) * perPage : null;
          };
          const lastItem = () => {
            return totalModel > 0 ? firstItem() + 1 : null;
          };
          return totalModel > 0 ? lastItem() : null;
        })(),
      };
    }
    // Modelo sin pagina
    else {
      // Set
      result = await model.find(modelQuery).sort({ _id: -1 });
    }

    // Response
    return result;
  }
}
