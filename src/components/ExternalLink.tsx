import { AnchorHTMLAttributes } from 'react'

type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'target'>

export function ExternalLink({ children, ...props }: Props) {
  return <a target="_blank" {...props}>{children}</a>
}
