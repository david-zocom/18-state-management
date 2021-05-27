import { useState } from 'react'
import { useRecoilState } from 'recoil'
import cartAtom from '../atoms/cart'

interface Props {
	name: string
}

const CartItem = ({ name }: Props) => {
	const [count, setCount] = useState(0)
	const [cartCount, setCartCount] = useRecoilState(cartAtom)

	const increase = () => {
		setCount(count + 1)
		setCartCount(cartCount + 1)
	}
	const decrease = () => {
		setCount(count - 1)
		setCartCount(cartCount - 1)
	}

	return (
		<div className="cart-item">
			<span>{name}: {count}</span>
			<button onClick={increase}> +1 </button>
			<button onClick={decrease}> -1 </button>
		</div>
	)
}

export default CartItem
