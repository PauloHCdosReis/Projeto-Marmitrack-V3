import { cn } from '@/lib/utils'
import { ReactNode } from 'react'
type PType = {
  bold?: boolean
  ultra?: boolean
  span?: boolean
  children: ReactNode
  className?: string
  asChild?: boolean
} & React.HTMLAttributes<HTMLParagraphElement>

export const P = ({
  children,
  span = false,
  bold = false,
  ultra = false,
  asChild = false,
  className,
  ...props
}: PType) => {
  if (span) {
    return (
      <span
        data-bold={bold}
        data-ultra={ultra}
        data-aschild={asChild}
        className={cn(
          'data-[aschild=false]:text-neutral-800 data-[aschild=false]:dark:text-neutral-200 font-univia-regular data-[bold=true]:font-univia-bold data-[ultra=true]:font-univia-ultra',
          className,
        )}
        {...props}
      >
        {children}
      </span>
    )
  }

  return (
    <p
      data-bold={bold}
      data-ultra={ultra}
      data-aschild={asChild}
      className={cn(
        'data-[aschild=false]:text-neutral-800 data-[aschild=false]:dark:text-neutral-200 font-univia-regular data-[bold=true]:font-univia-bold data-[ultra=true]:font-univia-ultra',
        className,
      )}
      {...props}
    >
      {children}
    </p>
  )
}
