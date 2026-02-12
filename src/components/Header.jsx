import Navbar from "./Navbar"

export default function Header() {
    return <>
        <header className="d-flex container">
            <figure>
                <img src="/src/assets/img/dc-logo.png" alt="" />
            </figure>
            <Navbar />
        </header>
    </>
}