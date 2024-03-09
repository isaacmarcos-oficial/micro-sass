import { cn } from '@/lib/utils'
import Link from 'next/link'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type DashboardSidebarGenericProps<T = any> = {
  children: React.ReactNode
  className?: string
} & T

export function DashboardSidebar({
  children,
  className,
}: DashboardSidebarGenericProps) {
  return (
    <aside
      className={cn(
        'border-r border-border flex flex-col space-y-6',
        className,
      )}
    >
      {children}
    </aside>
  )
}

export function DashboardSidebarHeader({
  children,
  className,
}: DashboardSidebarGenericProps) {
  return (
    <main className={cn('px-6 py-3 border-b border-border', className)}>
      {children}
    </main>
  )
}

export function DashboardSidebarHeaderTitle({
  children,
  className,
}: DashboardSidebarGenericProps) {
  return <h3 className={cn('', className)}>{children}</h3>
}

export function DashboardSidebarTitle({
  children,
  className,
}: DashboardSidebarGenericProps) {
  return <h3 className={cn('', className)}>{children}</h3>
}

export function DashboardSidebarMain({
  children,
  className,
}: DashboardSidebarGenericProps) {
  return <main className={cn('px-3', className)}>{children}</main>
}

export function DashboardSidebarNav({
  children,
  className,
}: DashboardSidebarGenericProps) {
  return <nav className={cn('', className)}>{children}</nav>
}

export function DashboardSidebarNavHeader({
  children,
  className,
}: DashboardSidebarGenericProps) {
  return <header className={cn('', className)}>{children}</header>
}

export function DashboardSidebarNavHeaderTitle({
  children,
  className,
}: DashboardSidebarGenericProps) {
  return (
    <h2
      className={cn('text-xs uppercase text-muted-foreground ml-3', className)}
    >
      {children}
    </h2>
  )
}

export function DashboardSidebarNavTitle({
  children,
  className,
}: DashboardSidebarGenericProps) {
  return <h4 className={cn('', className)}>{children}</h4>
}

export function DashboardSidebarNavMain({
  children,
  className,
}: DashboardSidebarGenericProps) {
  return <main className={cn('flex flex-col', className)}>{children}</main>
}

type DashboardSidebarNavLinkProps = {
  href: string
  active?: boolean
}

export function DashboardSidebarNavLink({
  children,
  className,
  href,
  active,
}: DashboardSidebarGenericProps<DashboardSidebarNavLinkProps>) {
  return (
    <Link
      href={href}
      className={cn(
        'flex items-center text-xs px-3 py-2 rounded-md',
        active && 'bg-secondary',
        className,
      )}
    >
      {children}
    </Link>
  )
}

export function DashboardSidebarFooter({
  children,
  className,
}: DashboardSidebarGenericProps) {
  return (
    <footer className={cn('p-6 mt-auto border-t border-border', className)}>
      {children}
    </footer>
  )
}
