import { z } from 'zod'

export const ForgotPasswordFormSchema = z.object({
  S_EMAIL: z
    .string()
    .min(1, 'O e-mail é obrigatório!')
    .max(128, 'O e-mail deve ter no máximo 128 caracteres')
    .email('O formato de e-mail é inválido!')
    .transform((S_EMAIL) => {
      return S_EMAIL.trim()
    }),
})

export type ForgotPasswordFormType = z.infer<typeof ForgotPasswordFormSchema>
