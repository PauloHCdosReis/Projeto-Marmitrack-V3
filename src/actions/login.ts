'use server'
import { RequestReponse } from '@/classes'
import { SetCookie } from '@/functions'
import { ApiRequest } from '@/lib/axios'
import { LoginFormType } from '@/schemas'
import { LoginRequestType } from '@/types'

export const LoginAction = async (
  data: LoginFormType,
): Promise<RequestReponse<LoginRequestType>> => {
  const response = await ApiRequest.request<LoginRequestType>({
    method: 'POST',
    url: '/auth/signin',
    body: {
      UserName: data.S_USERNAME,
      Password: data.S_SENHA,
      RememberSession: data.S_LEMBRARSENHA,
    },
  })
    .then(async (res) => {
      if (res.statusCode === 200) {
        const expirationDateAccessToken = new Date(
          res.body.ExpirationAccessToken,
        )
        const expirationDateRefreshToken = new Date(
          res.body.ExpirationRefreshToken,
        )
        await SetCookie(
          'AccessToken',
          res.body.AccessToken,
          expirationDateAccessToken,
        )
        await SetCookie(
          'RefreshToken',
          res.body.RefreshToken,
          expirationDateRefreshToken,
        )
      }

      return res
    })
    .catch((err: RequestReponse<LoginRequestType>) => {
      return err
    })

  return response
}
