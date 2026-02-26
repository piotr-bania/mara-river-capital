import './page.scss'

export default function About_Page() {
    return (
        <div className="section">
            {/* Background image */}
            <div className="background_image" aria-hidden="true" />

            {/* Background layer */}
            <div className="cover_rectangle" aria-hidden="true" />

            <section id="about">
                <h1>
                    Asymmetric investments sourced from developed
                    mid-markets{' '}
                </h1>
                <p>
                    Mara River is a Dallas-based investment firm launched in
                    2019. Our mission is to capture the dynamic potential of
                    small to midcap equities without the typical volatility.
                    <br />
                    <br />
                    We conduct original research at scale to identify
                    high-potential investments in developed markets, applying
                    our hedge fund background and cross-asset class risk
                    management expertise to deliver asymmetric, uncorrelated
                    returns with low volatility.
                </p>
            </section>
        </div>
    )
}
