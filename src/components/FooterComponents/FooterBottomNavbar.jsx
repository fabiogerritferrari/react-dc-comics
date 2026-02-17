
export default function FooterBottomNavbar() {
    return (
        <div className="bg-grey" id="footer-btm-nav-bg">
            <nav className="d-flex container" id="footer-bottom-navbar">
                <section>
                    <button id="footer-btn">SIGN-UP NOW</button>
                </section>
                <section className="d-flex" id="footer-social">
                    <h4>FOLLOW US</h4>
                    <i className="bi bi-facebook"></i>
                    <i className="bi bi-twitter-x"></i>
                    <i className="bi bi-youtube"></i>
                    <i className="bi bi-pinterest"></i>
                    <i className="bi bi-geo-alt"></i>
                </section>
            </nav>
        </div>
    )

}