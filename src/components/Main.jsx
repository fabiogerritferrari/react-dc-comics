import Products from './ProductComponent/Products'
import MainBottomNavbar from './MainComponents/MainBottomNavBar'
import comics from './ProductComponent/comics'

export default function Main() {
    return (
        <main>
            <section id="jumbotron"></section>
            <div className='bg-dark-grey'>
                <Products comics={comics} />
            </div>
            <div className='bg-dark-blue'>
                <MainBottomNavbar />
            </div>
        </main>
    )
}