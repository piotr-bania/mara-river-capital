import Link from 'next/link'
import Image from 'next/image'

export default function Home_Page() {
    return (
        <section>
            {/* Background image */}
            <div className="background_image" aria-hidden="true" />

            {/* Background layer */}
            <div className="cover_romboid" aria-hidden="true" />

            {/* Logo */}
            <div className="logo_center_container">
                <Link href="/about" aria-label="Mara River Capital logo">
                    <Image
                        src="/images/svg/logo.svg"
                        alt="Mara River Capital logo"
                        className="logo_center"
                        width={303.56}
                        height={115.05}
                        priority
                    />
                </Link>
            </div>
        </section>
    )
}
