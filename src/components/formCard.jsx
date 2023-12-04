/*Imports*/
	import { useContext, useState, useEffect, useRef, lazy, Suspense } from 'react'
	import { CloseIcon, GoogleIcon } from '../global/icons.jsx'
	import { Context } from '../global/context'
	import { SubmitUser } from './formCardUtils'

const LogIn = lazy(() => import('./forms/login'))
const SignUp = lazy(() => import('./forms/signup'))

function FormCard() {
	const [ isLogging, setIsLogging] = useState(true)
	const { isFormActive, setIsFormActive, user } = useContext(Context)
	const formRef = useRef()

	/* Tailwind Classes */
		const formDisplay = 'fixed inset-y-[10%] inset-x-[25%] sm:inset-x-[30%] md:inset-x-[32%] lg:inset-x-[41%] hidden scale-95 opacity-0'
		const formStyle = 'bg-charade-950 z-[100] p-5 text-center font-bold text-emerald-300 rounded-3xl min-w-fit min-h-fit'
		const formAnim = 'transition-all duration-100 ease-linear delay-1'

		const buttonDefault = 'py-1 px-2 m-1 rounded-2xl border-2 border-emerald-300'
		const buttonHover = 'hover:bg-emerald-500 hover:text-emerald-950 hover:border-emerald-500 hover:backdrop-brightness-150'

	useEffect(() => {

		if(isFormActive) {
			formRef.current.className = formRef.current.className.replace('hidden', 'block')
			setTimeout(() => {
				formRef.current.className = formRef.current.className.replace('scale-95', 'scale-100')
				formRef.current.className = formRef.current.className.replace('opacity-0', 'opacity-100')
			}, 100)
		} else {
			setTimeout(() => {
				formRef.current.className = formRef.current.className.replace('block', 'hidden')
			}, 100)
				formRef.current.className = formRef.current.className.replace('scale-100', 'scale-95')
				formRef.current.className = formRef.current.className.replace('opacity-100', 'opacity-0')
		}
	}, [isFormActive])

	const HandleCloseButton = () => {
		setIsFormActive(false)
	}
	useEffect(() => {
		if (user) setIsFormActive(false)
	}, [user])

	return (
			<form id='signupform' ref={formRef} autoComplete='on' method="get" className={`${formDisplay} ${formStyle} ${formAnim}`} onSubmit={(e) => e.preventDefault()}>
				<button type='close' className='absolute right-5 top-5' onClick={HandleCloseButton}><CloseIcon width='30' height='30'/></button>
				<Suspense fallback={<div>Loading...</div>}>
					{ isLogging ? <LogIn/> : <SignUp/>}
				</Suspense>
				<section className='flex justify-center my-3'>
					<button className='bg-charade-600 p-1 rounded-3xl border-2 hover:border-2 hover:border-emerald-500'>
						<GoogleIcon/>
					</button>
				</section>
				<section className='grid grid-cols-2 my-3'>
					<button onClick={() => setIsLogging(true)} className={`${buttonDefault} ${buttonHover}`}>Log In</button>
					<button onClick={() => setIsLogging(false)} className={`${buttonDefault} ${buttonHover}`}>Sign Up</button>
				</section>
				<button onClick={() => SubmitUser(formRef, isLogging)} className={`${buttonDefault} ${buttonHover}`}>{ isLogging ? 'Log In': 'Sign Up' }</button>
			</form>
	)
}

export default FormCard