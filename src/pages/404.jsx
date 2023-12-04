import { Link } from 'react-router-dom'

function Error404() {

	return (
	<div className='text-center'>
      <h2>404</h2>
      <h1>Page Not Found</h1>
      <Link to='/'>Go home</Link>
    </div>
    )
}

export default Error404