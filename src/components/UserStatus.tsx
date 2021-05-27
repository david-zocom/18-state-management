import { useSelector, useDispatch } from 'react-redux'
import { actions } from '../features/isLoggedIn'

const UserStatus = () => {
	const dispatch = useDispatch()
	const isLoggedIn = useSelector((state: any) => state.isLoggedIn)

	const signIn = () => dispatch(actions.login())
	const signOut = () => dispatch(actions.logout())

	return (
		<div>
			{isLoggedIn ? 'You are signed in.' : 'You are not signed in.'}
			<button onClick={signIn}> Sign in </button>
			<button onClick={signOut}> Sign out </button>
		</div>
	)
}

export default UserStatus
