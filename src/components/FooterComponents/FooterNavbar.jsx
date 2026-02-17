const FooterLinks = [
    {
        title: 'DC COMICS',
        links: [
            {
                label: 'Characters',
                href: '#'
            },
            {
                label: 'Comics',
                href: '#'
            },
            {
                label: 'Movies',
                href: '#'
            },
            {
                label: 'TV',
                href: '#'
            },
            {
                label: 'Games',
                href: '#'
            },
            {
                label: 'Videos',
                href: '#'
            },
            {
                label: 'News',
                href: '#'
            }
        ]
    }, {
        title: 'SHOPS',
        links: [
            {
                label: 'Shop DC',
                href: '#'
            },
            {
                label: 'Shop DC Collectibles',
                href: '#'
            },
        ]
    }, {
        title: 'DC',
        links: [
            {
                label: 'Terms Of Use',
                href: '#'
            },
            {
                label: 'Privacy policy(New)',
                href: '#'
            },
            {
                label: 'Ad Choices',
                href: '#'
            },
            {
                label: 'Advertising',
                href: '#'
            },
            {
                label: 'Jobs',
                href: '#'
            },
            {
                label: 'Subscriptions',
                href: '#'
            },
            {
                label: 'CPSC Certificates',
                href: '#'
            },
            {
                label: 'Ratings',
                href: '#'
            },
            {
                label: 'Show Help',
                href: '#'
            },
            {
                label: 'Contact us',
                href: '#'
            }
        ]
    }, {
        title: 'SITES',
        links: [
            {
                label: 'DC',
                href: '#'
            },
            {
                label: 'MAD  magazine',
                href: '#'
            },
            {
                label: 'DC Kids',
                href: '#'
            },
            {
                label: 'DC Universe',
                href: '#'
            },
            {
                label: 'DC Power Visa',
                href: '#'
            }
        ]
    }
]

export default function FooterNavbar() {
    return (
        <nav className="container d-flex" id="footer-nav">
            <div className="d-flex" id="footerLinks">
                {FooterLinks.map((section, index) => {
                    return (
                        <section key={index}>
                            <h4>{section.title}</h4>
                            <ul>
                                {(section.links).map((link, index) => {
                                    return (
                                        <li key={index}>
                                            <a href={link.href}>{link.label}</a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </section>
                    )
                })}
            </div>
            <div>
                <figure>
                    <img src="./src/assets/img/dc-logo-bg.png" alt="DC logo" />
                </figure>
            </div>

        </nav>
    )
} 