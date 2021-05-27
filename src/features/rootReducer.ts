import { combineReducers } from 'redux'
import { reducer as loginReducer } from './isLoggedIn'

/*
state: {
	isLoggedIn: false,
	products: Product[],
	cart: CartProduct[]
}
interface Product {
	id: number,
	name: string,
	price: number
}
interface CartProduct {
	product: Product,
	amount: number
}

*/

const rootReducer = combineReducers({
	isLoggedIn: loginReducer,
	// productsReducer,
	// cartReducer
})

export { rootReducer }
