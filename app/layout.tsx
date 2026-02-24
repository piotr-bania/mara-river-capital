import type { Metadata } from 'next'
import './globals.css'
import './globals.scss'

export const metadata: Metadata = {
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

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className="antialiased">{children}</body>
        </html>
    )
}
