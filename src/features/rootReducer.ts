import { combineReducers } from 'redux'
import { reducer as loginReducer } from './isLoggedIn'
import { reducer as productsReducer } from './products'
import { reducer as cartReducer } from './cart'

const rootReducer = combineReducers({
	isLoggedIn: loginReducer,
	products: productsReducer,
	cart: cartReducer
})
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

export { rootReducer }
