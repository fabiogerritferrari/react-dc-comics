export default function ProductCard(props) {

    const { id, thumb, title } = props

    return (
        <li className="product-card" key={id}>
            <img src={thumb} alt={title} />
            <h3>{title}</h3>
        </li>
    )

}