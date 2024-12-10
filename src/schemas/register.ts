import { z } from 'zod'

export const RegisterFormSchema = z.object({
  S_NOME: z
    .string()
    .min(1, 'O nome é obrigatório!')
    .max(128, 'O nome deve ter no máximo 128 caracteres')
    .transform((S_NOME) => {
      return S_NOME.trim()
    }),
  S_USERNAME: z
    .string()
    .min(1, 'O username é obrigatório!')
    .max(30, 'O username deve ter no máximo 30 caracteres')
    .transform((S_USERNAME) => {
      return S_USERNAME.trim()
    }),
  S_SENHA: z
    .string()
    .min(1, 'A senha é obrigatória!')
    .max(100, 'A senha deve ter no máximo 100 caracteres')
    .regex(/^[^ ]*$/, 'A senha não pode conter espaços!')
    .transform((S_SENHA) => {
      return S_SENHA.trim()
    }),
  S_EMAIL: z
    .string()
    .min(1, 'O e-mail é obrigatório!')
    .max(128, 'O e-mail deve ter no máximo 128 caracteres')
    .email('O formato de e-mail é inválido!')
    .transform((S_EMAIL) => {
      return S_EMAIL.trim()
    }),
  S_NOTIFICACAO: z.boolean().default(false),
})

export type RegisterFormType = z.infer<typeof RegisterFormSchema>
