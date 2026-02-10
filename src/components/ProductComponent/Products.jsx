import comics from './comics'

export default function Products() {
    return (
        <section id='product-section' className='container'>
            <span className='bg-dark-blue'>CURRENT SERIES</span>
            <ul className='d-flex'>
                {comics.map((comic) => {
                    return (
                        <li className="product-card" key={comic.id}>
                            <img src={comic.thumb} alt={comic.title} />
                            <h3>{comic.title}</h3>
                        </li>
                    )
                })}
            </ul>
            <button className='bg-dark-blue'>LOAD MORE</button>
        </section>
    )

}