export default function MainBottomNavbar() {
    const links = [
        {
            id: 1,
            img: './src/assets/img/buy-comics-digital-comics.png',
            title: 'DIGITAL COMICS'
        }, {
            id: 2,
            img: './src/assets/img/buy-comics-merchandise.png',
            title: 'DC MERCHANDISE'
        }, {
            id: 3,
            img: './src/assets/img/buy-comics-subscriptions.png',
            title: 'SUBSCRIPTIONS'
        }, {
            id: 4,
            img: './src/assets/img/buy-comics-shop-locator.png',
            title: 'COMIC SHOP LOCATOR'
        }, {
            id: 5,
            img: './src/assets/img/buy-dc-power-visa-svg.png',
            title: 'DC POWER VISA'
        }
    ]
    return (
        <nav className="container">
            <ul className="d-flex" id="main-bt-nav">
                {links.map((link) => {
                    return (

                        <li key={link.id} className="d-flex">
                            <img src={link.img} alt={link.title} />
                            <span>{link.title}</span>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}