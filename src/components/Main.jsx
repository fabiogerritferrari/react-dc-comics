import Products from './ProductComponent/Products'
import MainBottomNavbar from './MainBottomNavBar'

export default function Main() {
    return <>
        <main>
            <section id="jumbotron"></section>
            <div className='bg-dark-grey'>
                <Products />
            </div>
            <div className='bg-dark-blue'>
                <MainBottomNavbar />
            </div>
        </main>
    </>
}