import './App.css'
import {Header} from './components/Header'
import {Routes, Route} from 'react-router-dom'
import {HomePage} from './pages/Home'

function App() {
  return (
    <>
    <Header/>
    <Routes>
        <Route path='/' element={<HomePage/>}/>
    </Routes>
    </>
  )
}

export default App
