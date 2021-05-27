import { createAction, createReducer } from '@reduxjs/toolkit'
import { Product } from '../types/Product'
import { CartProduct } from '../types/CartProduct'


const addToCart: any = createAction('add product to cart')
const removeFromCart: any = createAction('remove one product from cart')
const actions = { addToCart, removeFromCart }


const initialState: CartProduct[] = []

const reducer = createReducer(initialState, {

	[addToCart.toString()]: (state: CartProduct[], action) => {
		const product: Product = action.payload
		if( state.find(item => item.product.id === product.id) ) {
			return state.map(item => {
				if( item.product.id === product.id ) {
					// returnera ett nytt objekt med amount+1
					return { product: product, amount: item.amount + 1 }
				} else {
					return item
				}
			})

		} else {
			return [ ...state,
				{ product: action.payload, amount: 1 }
			]
		}
	},  // addToCart

	[removeFromCart.toString()]: (state, action) => {
		const id: number = action.payload
		return state.map(item => {
			if( item.product.id === id ) {
				return { ...item, amount: item.amount - 1 }
			} else {
				return item
			}
		})
	}
})

export { actions, reducer }
