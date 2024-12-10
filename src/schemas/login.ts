import { z } from 'zod'

export const LoginFormSchema = z.object({
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
  S_LEMBRARSENHA: z.boolean().default(false),
})

export type LoginFormType = z.infer<typeof LoginFormSchema>
