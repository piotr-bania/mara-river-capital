import type { Metadata } from 'next'
import './globals.css'
import './globals.scss'
import Footer from '@/components/layout/Footer'

const metadataBase = process.env.NEXT_PUBLIC_SITE_URL
    ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
    : process.env.VERCEL_URL
      ? new URL(`https://${process.env.VERCEL_URL}`)
      : new URL('http://localhost:3000')

export const metadata: Metadata = {
    metadataBase,
    title: 'Mara River Capital Redesign Case Study | Piotr Bania',
    description:
        'A complete redesign and rebuild of the Mara River Capital website focused on modern UI, performance, UX clarity, and SEO optimisation.',
    keywords: [
        'Mara River Capital redesign',
        'Web design case study',
        'investment firm website',
        'UI/UX portfolio',
        'performance optimisation',
    ],
    openGraph: {
        title: 'Mara River Capital Website Redesign – Case Study',
        description:
            'Explore the redesign of Mara River Capital’s site with strategic UX improvements, modern SEO, and performance enhancements.',
        images: [
            {
                url: '/og/marariver-redesign.jpg',
                width: 1200,
                height: 630,
                alt: 'Mara River Capital redesign preview',
            },
        ],
    },
}

export default function Root_Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body suppressHydrationWarning>
                {children}
                <Footer />
            </body>
        </html>
    )
}
