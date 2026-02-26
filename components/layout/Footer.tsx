export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <section
            id="footer"
            className="fixed inset-x-0 bottom-0 z-50 pb-[env(safe-area-inset-bottom)]"
        >
            <footer className="section footer">
                <p className="link">
                    Copyright © {currentYear} Mara River Capital Management LLC
                    | All rights reserved | <a href="#">Terms of Use</a>
                </p>
            </footer>
        </section>
    )
}
