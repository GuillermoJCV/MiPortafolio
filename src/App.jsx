import { useContext, lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import FormCard from './components/formCard'
import Navbar from './pages/Navbar'
import { Context } from './global/context'

const HomePage = lazy(() => import('./pages/HomePage'))
const AboutMe = lazy(() => import('./pages/AboutMe'))
const DatabasePage = lazy(() => import('./pages/database/DatabasePage'))
const Error404 = lazy(() => import('./pages/404'))

function App() {
  const { isFormActive } = useContext(Context)

  return (
      <div>
        <div className='z-[10]'>
          <FormCard/>
          <Navbar/>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes >
                  <Route path='/' element={<HomePage/>}/>
                  <Route path='/about' element={<AboutMe/>}/>
                  <Route path='/database' element={<DatabasePage/>}/>
                  <Route path='/*' element={<Error404/>}/>
            </Routes>
          </Suspense>
        </div>
      </div>
  )
}

export default App
