import { combineReducers } from 'redux'
import { reducer as loginReducer } from './isLoggedIn'
import { reducer as productsReducer } from './products'


const rootReducer = combineReducers({
	isLoggedIn: loginReducer,
	products: productsReducer,
	// cartReducer
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
