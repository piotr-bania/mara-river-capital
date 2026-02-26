import Logo from '@/components/layout/Logo'

export default function Pages_Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Logo />
            {children}
        </>
    )
}
