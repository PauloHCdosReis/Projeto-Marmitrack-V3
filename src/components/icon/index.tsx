import { icons, LucideProps } from 'lucide-react'

type IconType = {
  name: keyof typeof icons
} & LucideProps

const Icon = ({ name, ...props }: IconType) => {
  const LucideIcon = icons[name]

  return <LucideIcon {...props} />
}

export default Icon
