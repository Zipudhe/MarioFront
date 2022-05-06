import { Routes, Route } from 'react-router-dom'
import Display from './Display'

export const Home = () => {

  return (
    <Routes>
      <Route path='/' element={<Display />} />
    </Routes>
  )
}

export default Home