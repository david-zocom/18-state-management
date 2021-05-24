import { useContext } from 'react'
import ThemeContext from '../contexts/ThemeContext'

const ThemedButton = ()  => {
	const theme = useContext(ThemeContext)

	return (
		<button className={theme}> Themed button? </button>
	)
}

export default ThemedButton
