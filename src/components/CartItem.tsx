interface Props {
	name: string
}

const CartItem = ({ name }: Props) => (
	<div>
		{name}
	</div>
)

export default CartItem
