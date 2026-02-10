export default function FooterBottomNavbar() {
    return (
        <div className="bg-grey" id="footer-btm-nav-bg">
            <nav className="d-flex container" id="footer-bottom-navbar">
                <section>
                    <button id="footer-btn">SIGN-UP NOW</button>
                </section>
                <section className="d-flex" id="footer-social">
                    <h4>FOLLOW US</h4>
                    <i class="bi bi-facebook"></i>
                    <i class="bi bi-twitter-x"></i>
                    <i class="bi bi-youtube"></i>
                    <i class="bi bi-pinterest"></i>
                    <i class="bi bi-geo-alt"></i>
                </section>
            </nav>
        </div>
    )

}