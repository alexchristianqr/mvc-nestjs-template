import { Model } from 'mongoose'

type myschema = {
  model: Model<any>
  modelQuery: object
  paginate: { perPage: string; page: string }
  joins: string[]
  fields: string[]
  sort: boolean
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
export const getModel = async ({ model, modelQuery, paginate, joins, fields, sort }: myschema): Promise<any> => {
  console.log('[HelperService.getModel]')

  let result

  // Modelo con pagina
  if (paginate) {
    // Set
    const perPage = parseInt(paginate.perPage)
    const page = parseInt(paginate.page)

    let sortQuery
    if (sort) {
      sortQuery = sort
    } else {
      sortQuery = { _id: -1 }
    }

    // Paginar colección
    const dataModel = await model
      .find(modelQuery)
      .select(fields)
      .populate(joins)
      .sort(sortQuery)
      .limit(perPage)
      .skip((page - 1) * perPage)

    // Total
    const totalModel = await model.find(modelQuery).countDocuments()

    // Set variables de paginación
    result = {
      data: dataModel,
      perPage: perPage,
      to: (() => {
        const firstItem = () => {
          return totalModel > 0 ? (page - 1) * perPage : null
        }
        return totalModel > 0 ? firstItem() + Math.round(page / perPage) : null
      })(),
      total: totalModel,
      from: (() => {
        const firstItem = () => {
          return totalModel > 0 ? (page - 1) * perPage : null
        }
        const lastItem = () => {
          return totalModel > 0 ? firstItem() + 1 : null
        }
        return totalModel > 0 ? lastItem() : null
      })(),
    }
  }
  // Modelo sin pagina
  else {
    // Set
    result = await model.find(modelQuery).sort({ _id: -1 })
  }

  // Response
  return result
}
