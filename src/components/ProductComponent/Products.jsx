import ProductCard from './ProductCard'

export default function Products(props) {

    const { comics } = props;

    return (
        <section id='product-section' className='container'>
            <span className='bg-dark-blue'>CURRENT SERIES</span>
            <ul className='d-flex'>
                {comics.map((comic) => {
                    return (
                        <ProductCard
                            id={comic.id}
                            thumb={comic.thumb}
                            title={comic.title}
                        />
                    )
                })}
            </ul>
            <button className='bg-dark-blue'>LOAD MORE</button>
        </section>
    )

}