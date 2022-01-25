import { lazy } from 'solid-js'
import { Route, Routes } from 'solid-app-router'

const Home = lazy(() => import('./pages/index.jsx'))
const Users = lazy(() => import('./pages/users.jsx'))

function App() {
  return (
    <Routes>
      <Route path="/users" element={<Users />} />
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default App
