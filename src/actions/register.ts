'use server'
import { RequestReponse } from '@/classes/axios'
import { SetCookie } from '@/functions'
import { ApiRequest } from '@/lib/axios'
import { RegisterFormType } from '@/schemas'

type RegisterRequestType = {
  UserName: string
  Authenticated: boolean
  CredentialsNonExpired: boolean
  Created: string
  ExpirationAccessToken: string
  AccessToken: string
}

export const RegisterAction = async (
  data: RegisterFormType,
): Promise<RequestReponse<RegisterRequestType>> => {
  const response = await ApiRequest.request<RegisterRequestType>({
    method: 'POST',
    url: '/auth/register',
    body: {
      FullName: data.S_NOME,
      UserName: data.S_USERNAME,
      Email: data.S_EMAIL,
      Password: data.S_SENHA,
      Notifications: data.S_NOTIFICACAO,
    },
  })
    .then(async (res) => {
      if (res.statusCode === 200) {
        const expirationDateAccessToken = new Date(
          res.body.ExpirationAccessToken,
        )
        await SetCookie(
          'AccessToken',
          res.body.AccessToken,
          expirationDateAccessToken,
        )
      }

      return res
    })
    .catch((err: RequestReponse<RegisterRequestType>) => {
      return err
    })

  return response
}
