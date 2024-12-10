import { P } from '@/components/text'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Login = async () => {
  return (
    <div className="flex justify-center items-center flex-col gap-2 md:gap-4">
      <P ultra className="text-3xl">
        Marmitrack
      </P>
      <P bold className="text-xl">
        Conecte-se
      </P>
      <div className="flex flex-row justify-center items-center">
        <P>Ainda não tem cadastro?</P>
        <Button variant={'link'} size={'sm'} asChild>
          <Link href={'/register'}>
            <P asChild>Registre-se!</P>
          </Link>
        </Button>
      </div>
    </div>
  )
}
export default Login
