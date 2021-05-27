import { useSelector, useDispatch } from 'react-redux'
import { Product } from '../types/Product'
import { actions } from '../features/cart'

const ProductList = () => {
	const dispatch = useDispatch()
	const products: Product[] = useSelector((state: any) => state.products)

	return (
		<div>
			{products.map(product => (
				<div key={product.id}>
					{product.name} ... {product.price}
					<button onClick={() => dispatch( actions.addToCart(product) )}> Add to cart </button>
				</div>
			))}
		</div>
	)
}

export default ProductList
