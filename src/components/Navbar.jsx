export default function Navbar() {
    const Links = [
        {
            id: 0,
            text: 'CHARACTERS',
            current: false
        },
        {
            id: 1,
            text: 'COMICS',
            current: true
        },
        {
            id: 2,
            text: 'MOVIES',
            current: false
        },
        {
            id: 3,
            text: 'TV',
            current: false
        },
        {
            id: 4,
            text: 'GAMES',
            current: false
        },
        {
            id: 5,
            text: 'COLLECTIBLES',
            current: false
        },
        {
            id: 6,
            text: 'VIDEOS',
            current: false
        },
        {
            id: 7,
            text: 'FANS',
            current: false
        },
        {
            id: 8,
            text: 'NEWS',
            current: false
        },
        {
            id: 9,
            text: 'SHOP',
            current: false
        }
    ];


    return (
        <nav id="top-navbar">
            <ul className="d-flex">
                {Links.map(link => {
                    return (
                        <li key={link.id}>
                            <a href="#" className={link.current ? 'active' : ''}>
                                {link.text}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}