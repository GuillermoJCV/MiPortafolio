import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../global/firebaseHandler'

export const SubmitUser = (ref, logging) => {

	const userName = ref.current.username?.value
	const userEmail = ref.current.email?.value
	const userPassword = ref.current.password?.value

	if(logging) {
		signInWithEmailAndPassword(auth, userEmail, userPassword)
			.then((credential) => {
				console.log('Logged')
			})
	} else {
		createUserWithEmailAndPassword(auth, userEmail, userPassword)
			.then((credential) => {
				console.log('Signed')
			})
			.catch(err => console.log(err))
	}
}