import { useRef, useContext } from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import { HomeIcon, PersonIcon, DatabaseIcon, MenuIcon } from '../global/icons'
import { getFormRef } from '../global/references'
import { Context } from '../global/context'
import { auth } from '../global/firebaseHandler'
import { signOut } from 'firebase/auth'

function Navbar () {
	const NavbarRef = useRef()
	const { isFormActive, setIsFormActive, user } = useContext(Context)

	const NavbarDisplay = 'w-[10rem] translate-x-[-10rem]'
	const NavbarAnim = 'transition-all duration-100 ease-linear'
	const NavbarStyles = 'min-h-screen py-2 fixed bg-charade-900 font-bold text-emerald-200'

	const NavItem = 'px-6 py-7 border-solid border-b-2 border-emerald-200'

	const NavLinkDefaultStyle = 'flex items-center justify-between'
	const isActiveCondition = ({isActive}) => isActive ? `brightness-150 drop-shadow-md ${NavLinkDefaultStyle}` : `brightness-50 hover:brightness-150 ${NavLinkDefaultStyle}`

	const HandleOpenFormButton = () => {
		
		if (!user) {
			setIsFormActive(true)
		} else {
			signOut(auth)
		}
	}

	const HandleMenuButton = () => {
		NavbarRef.current.classList.toggle('translate-x-[-10rem]')
	}

	return(
		<header>
			<nav ref={NavbarRef} className={`${NavbarDisplay} ${NavbarAnim} ${NavbarStyles}`}>
				<i onClick={HandleMenuButton} className='absolute right-[-45px] cursor-pointer rounded-md border-solid border-1 border-emerald-500 bg-charade-900'>
					<MenuIcon width='35' height='35'/>
				</i>
				<ul className='flex flex-col transition-all'>
					<li className={NavItem}>
						<NavLink className={isActiveCondition} to='/'>
							<span>Home</span>
							<HomeIcon width='30' height='30'/>
						</NavLink>
					</li>
					<li className={NavItem}>
						<NavLink className={isActiveCondition} to='/about'>
							<span>About Me</span>
							<PersonIcon width='30' height='30'/>
						</NavLink>
					</li>
					<li className={NavItem}>
						<NavLink className={isActiveCondition} to='/database'>
							<span>Database</span>
							<DatabaseIcon width='30' height='30'/>
						</NavLink>
					</li>
					<li className="text-center py-7">
						<button onClick={HandleOpenFormButton}>
							{!user ? 'Sign In' : 'Sign Out'}
						</button>
						{}
					</li>
				</ul>
			</nav>
			<Outlet/>
		</header>
	)
}

export default Navbar