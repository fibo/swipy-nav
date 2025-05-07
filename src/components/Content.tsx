import { PropsWithChildren } from 'react'

type Props = Partial<{
  className: string
}>

export function Content({ children, className = '' }: PropsWithChildren<Props>) {
  return <div className={`content ${className}`}>{children}</div>
}
