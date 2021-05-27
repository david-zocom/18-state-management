import { createAction, createReducer } from '@reduxjs/toolkit'


const login = createAction('sign in user')
const logout = createAction('sign out user')
const actions = { login, logout }

const initialState = false

const reducer = createReducer(initialState, {
	[login.toString()]: (state, action) => true,
	[logout.toString()]: (state, action) => false
})

export { actions, reducer }
