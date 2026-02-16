import Navbar from "./Header components/Navbar"

export default function Header() {
    return <>
        <header className="d-flex container">
            <figure>
                <img src="/src/assets/img/dc-logo.png" alt="DC-Logo" />
            </figure>
            <Navbar />
        </header>
    </>
}