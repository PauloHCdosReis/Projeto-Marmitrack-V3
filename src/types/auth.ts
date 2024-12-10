export type LoginRequestType = {
  UserName: string
  Authenticated: boolean
  CredentialsNonExpired: boolean
  Created: string
  ExpirationAccessToken: string
  AccessToken: string
  ExpirationRefreshToken: string
  RefreshToken: string
}

export type RefreshTokenRequestType = LoginRequestType

export type ForgotPasswordRequestType = {
  success: boolean
  status: string
  details: string
}

export type RegisterRequestType = LoginRequestType

export type TrocarSenhaRequestType = LoginRequestType
