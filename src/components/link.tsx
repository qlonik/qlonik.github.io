/* eslint-disable jsx-a11y/anchor-has-content */

import type { LinkProps as MuiLinkProps } from '@mui/material/Link'
import MuiLink from '@mui/material/Link'
import clsx from 'clsx'
import type { LinkProps as NextLinkProps } from 'next/link'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import type { ForwardedRef, PropsWithChildren } from 'react'
import * as React from 'react'

interface NextLinkComposedProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>,
    Omit<NextLinkProps, 'href' | 'as'> {
  to: NextLinkProps['href']
  linkAs?: NextLinkProps['as']
  href?: NextLinkProps['href']
}

export const NextLinkComposed = React.forwardRef(function NextLinkComposed(
  {
    to,
    linkAs,
    href,
    replace,
    scroll,
    passHref,
    shallow,
    prefetch,
    locale,
    ...other
  }: PropsWithChildren<NextLinkComposedProps>,
  ref: ForwardedRef<HTMLAnchorElement>,
) {
  return (
    <NextLink
      href={to}
      prefetch={prefetch}
      as={linkAs}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      passHref={passHref}
      locale={locale}
    >
      <a ref={ref} {...other} />
    </NextLink>
  )
})

export type LinkProps = {
  activeClassName?: string
  as?: NextLinkProps['as']
  href: NextLinkProps['href']
  noLinkStyle?: boolean
} & Omit<NextLinkComposedProps, 'to' | 'linkAs' | 'href'> &
  Omit<
    MuiLinkProps,
    // todo(qlonik): remove 'ref' once
    //  https://github.com/mui-org/material-ui/issues/24901 is addressed
    'ref' | 'href'
  >

/**
 * A styled version of the Next.js Link component.
 *
 * @see {@link https://nextjs.org/docs/#with-link}
 * @see Based on
 *    {@link https://github.com/mui-org/material-ui/blob/df30fb809cbf7f37ecf7d30e646b06f14a8675d8/examples/nextjs-with-typescript/src/Link.tsx}
 */
export const Link = React.forwardRef(function Link(
  {
    activeClassName = 'active',
    as: linkAs,
    className: classNameProps,
    href,
    noLinkStyle,
    role, // Link doesn't have roles.
    ...other
  }: PropsWithChildren<LinkProps>,
  ref: ForwardedRef<HTMLAnchorElement>,
) {
  const router = useRouter()
  const pathname = typeof href === 'string' ? href : href.pathname
  const className = clsx(classNameProps, {
    [activeClassName]: router.pathname === pathname && activeClassName,
  })

  const isExternal =
    typeof href === 'string' &&
    (href.indexOf('http') === 0 || href.indexOf('mailto:') === 0)

  if (isExternal) {
    if (noLinkStyle) {
      return <a className={className} href={href} ref={ref} {...other} />
    }

    return <MuiLink className={className} href={href} ref={ref} {...other} />
  }

  if (noLinkStyle) {
    return (
      <NextLinkComposed className={className} ref={ref} to={href} {...other} />
    )
  }

  return (
    <MuiLink
      component={NextLinkComposed}
      linkAs={linkAs}
      className={className}
      ref={ref}
      to={href}
      {...other}
    />
  )
})
