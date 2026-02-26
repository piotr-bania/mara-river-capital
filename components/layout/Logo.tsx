import Link from 'next/link'
import Image from 'next/image'

export default function Logo() {
    return (
        <section id="logo">
            <div className="section">
                <Link href="/" aria-label="Mara River Capital logo">
                    <Image
                        src="/images/svg/logo.svg"
                        alt="Mara River Capital logo"
                        className="logo"
                        width={186.18}
                        height={70.56}
                    />
                </Link>
            </div>
        </section>
    )
}
