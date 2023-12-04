
function SignUp() {

	const dinamicDisplay = 'w-[10rem] sm:w-[13rem] md:w-[15rem]'
	const inputsStyle = 'rounded-md bg-emerald-100 text-center text-emerald-800'

	return (
		<>
			<h2 className='my-4 border-b-2 border-emerald-300'>Sign Up</h2>
			<article className='my-5'>
				<section className='my-5'>
					<label htmlFor='username'>User Name</label>
					<br/>
					<input type='text' className={`${dinamicDisplay} ${inputsStyle}`} id='username' require='true'/>
				</section>
				<section className='my-5'>
					<label htmlFor='email'>Email</label>
					<br/>
					<input type='email' className={`${dinamicDisplay} ${inputsStyle}`} id='email' require='true'/>
				</section>
				<section className='my-5'>
					<label htmlFor='password'>Password</label>
					<br/>
					<input type='password' className={`${dinamicDisplay} ${inputsStyle}`} id='password' require='true'/>
				</section>
			</article>
		</>
	)
}

export default SignUp