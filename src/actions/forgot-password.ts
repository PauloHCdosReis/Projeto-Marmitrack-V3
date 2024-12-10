'use server'
import { RequestReponse } from '@/classes'
import { SetCookie } from '@/functions'
import { ApiRequest } from '@/lib/axios'
import { ForgotPasswordFormType } from '@/schemas'
import { ForgotPasswordRequestType } from '@/types'

export const ForgotPasswordAction = async (
  data: ForgotPasswordFormType,
): Promise<RequestReponse<ForgotPasswordRequestType>> => {
  const expireDate = new Date()
  expireDate.setFullYear(expireDate.getFullYear() + 20)
  const response = await ApiRequest.request<ForgotPasswordRequestType>({
    method: 'PATCH',
    url: `/auth/forgot-password/${data.S_EMAIL}`,
  })
    .then(async (res) => {
      if (res.statusCode === 200) {
        await SetCookie('TrocarSenha', 'true', expireDate)
      }

      return res
    })
    .catch((err: RequestReponse<ForgotPasswordRequestType>) => {
      return err
    })

  return response
}
