import { KeyCookiesType } from '@/types'
import { cookies } from 'next/headers'

export const GetCookie = async <T = string>(key: KeyCookiesType) => {
  const Cookies = await cookies()
  const Cookie = Cookies.get(`@MarmiTrack-V3-${key}`)?.value

  if (!Cookie) return undefined

  return JSON.parse(Cookie) as T
}

export const SetCookie = async (
  key: KeyCookiesType,
  data: string,
  expires: number | Date,
) => {
  const Cookies = await cookies()
  Cookies.set(`@MarmiTrack-V3-${key}`, data, {
    path: '/',
    expires: expires ?? 3600,
    sameSite: 'lax',
  })
}

export const HasCookie = async (key: KeyCookiesType) => {
  const Cookies = await cookies()
  return Cookies.has(`@MarmiTrack-V3-${key}`)
}

export const DeleteCookie = async (key: KeyCookiesType) => {
  const Cookies = await cookies()
  Cookies.delete(`@MarmiTrack-V3-${key}`)
}
