import type { Metadata } from 'next'
import './globals.css'
import './globals.scss'

export const metadata: Metadata = {
    title: 'Mara River Capital | Asymmetric Equity Investment Firm',
    description:
        'Mara River Capital is a Miami-based investment firm specialising in asymmetric, high-potential midcap equities. Built on deep research and risk-aware strategies to deliver uncorrelated returns with controlled volatility.',
    keywords: [
        'Mara River Capital',
        'asymmetric investments',
        'midcap equities',
        'investment firm Miami',
        'capital management',
        'risk management',
        'hedge fund strategy',
        'financial research',
    ],
    authors: [{ name: 'Mara River Capital Management LLC' }],
    creator: 'Mara River Capital Management LLC',
    openGraph: {
        title: 'Mara River Capital - Investment Management Firm',
        description:
            'Explore Mara River Capital’s approach to identifying asymmetric investment opportunities in developed midcap markets with disciplined risk management.',
        type: 'website',
        url: 'https://mararivercapital.com/',
        images: [
            {
                url: '/og/marariver-hero.jpg',
                width: 1200,
                height: 630,
                alt: 'Mara River Capital investment management overview',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Mara River Capital | Asymmetric Investment Firm',
        description:
            'Research-driven investment strategies targeting midcap equities with low volatility and uncorrelated returns.',
        images: ['/og/marariver-hero.jpg'],
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
