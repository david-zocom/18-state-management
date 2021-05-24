import { atom } from 'recoil'

const cartAtom = atom({
	key: 'cart count',
	default: 0
})

export default cartAtom
