import { Api } from '@/lib/axios'
import { AxiosError, AxiosResponse, isAxiosError } from 'axios'

export type ApiError = {
  success: boolean
  status: number
  details: string[] | string
}

export type RequestReponse<T> = {
  statusCode: number
  success: boolean
  body: T
  message: string
}

export type HttpRequest = {
  url: string
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
  responseType?:
    | 'arraybuffer'
    | 'blob'
    | 'document'
    | 'formdata'
    | 'json'
    | 'stream'
    | 'text'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body?: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params?: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  headers?: any
}

export interface HttpClient<T = never> {
  request: (data: HttpRequest) => Promise<RequestReponse<T>>
}

export class AdapterRequest implements HttpClient {
  async request<T = never>(data: HttpRequest): Promise<RequestReponse<T>> {
    let axiosResponse: AxiosResponse
    try {
      axiosResponse = await Api({
        url: data.url,
        responseType: data.responseType,
        params: data.params,
        method: data.method,
        data: data.body,
        headers: data.headers,
      })
      return {
        statusCode: axiosResponse.status,
        success: true,
        message: 'Sucesso na Requisição!',
        body: axiosResponse.data,
      }
    } catch (error) {
      let _error: undefined | AxiosError<ApiError>
      let message = 'Erro Interno!'

      if (isAxiosError(error)) {
        _error = error
      }

      if (
        _error?.response &&
        typeof _error.response.data.details !== 'string' &&
        _error.response.data?.details.length >= 1
      ) {
        message = _error.response.data.details
          .map((detail: string) => `${detail}.`)
          .join('\n')
      } else if (typeof _error?.response?.data.details === 'string') {
        message = _error.response.data.details
      }

      const data = (): RequestReponse<T> => {
        return {
          statusCode: _error?.response?.status ?? 500,
          success: _error?.response?.data.success ?? false,
          message,
          body: [] as T,
        }
      }

      throw data()
    }
  }
}
