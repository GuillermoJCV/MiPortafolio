import { createContext, useState } from 'react'
import { auth } from './firebaseHandler'
import { onAuthStateChanged } from 'firebase/auth'

export const Context = createContext(null)



export const Data = ({children}) => {
	const [isFormActive, setIsFormActive] = useState(false)
	const [user, setUser] = useState(null)

	onAuthStateChanged(auth, (firebaseUser) => {
		setUser(firebaseUser)
	})

	return(
		<Context.Provider value={{ isFormActive, setIsFormActive, user }}>
			{children}
		</Context.Provider>
	)
}