import { createAction, createReducer } from '@reduxjs/toolkit'
import { Product } from '../types/Product'


const actions = {}


const initialState: Product[] = [
	{ id: 10, name: 'Chocolate', price: 20 },
	{ id: 11, name: 'Vanilla', price: 20 },
	{ id: 12, name: 'Strawberry', price: 25 },
]

const reducer = createReducer(initialState, {

})

export { actions, reducer }
