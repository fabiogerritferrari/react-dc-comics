import Products from './ProductComponent/Products'

export default function Main() {
    return <>
        <main>
            <section id="jumbotron"></section>
            <div className='bg-dark-grey'>
                <Products />
            </div>
        </main>
    </>
}