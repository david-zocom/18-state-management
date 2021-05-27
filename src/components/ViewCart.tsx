import { useSelector, useDispatch } from 'react-redux'
import { CartProduct } from '../types/CartProduct'
import { actions } from '../features/cart'

const ViewCart = () => {
	const dispatch = useDispatch()
	const cartItems: CartProduct[] = useSelector((state: any) => state.cart)

	return (
		<div>
			<h3> Your cart </h3>
			{cartItems.map(item => (
				<div key={item.product.id}>
					{item.amount} {item.product.name} ...
					{item.product.price * item.amount}$
					<button onClick={() => dispatch( actions.removeFromCart(item.product.id) )}> Remove one </button>
				</div>
			))}
		</div>
	)
}

export default ViewCart
