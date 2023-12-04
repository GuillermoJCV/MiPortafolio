
function LogIn() {

	const dinamicDisplay = 'w-[10rem] sm:w-[13rem] md:w-[15rem]'
	const inputsStyle = 'rounded-md bg-emerald-100 text-center text-emerald-800'

	return (
		<>
			<h2 className='my-4 border-b-2 border-emerald-300'>Log In</h2>
			<article className='my-5'>
				<section className='my-5'>
					<label htmlFor='email'>Email</label>
					<br/>
					<input type='email' className={`${dinamicDisplay} ${inputsStyle}`} id='email' require='true'/>
				</section>
				<section className='my-5'>
					<label htmlFor='password'>Password</label>
					<br/>
					<input type='pasword' className={`${dinamicDisplay} ${inputsStyle}`} id='password' require='true'/>
				</section>
			</article>
		</>
	)
}

export default LogIn