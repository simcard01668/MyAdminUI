import Home from './pages/home/Home'
import List from './pages/list/List'
import Login from './pages/login/Login'
import New from './pages/new/New'
import Single from './pages/single/Single'
import { BrowserRouter , Route, Routes } from 'react-router-dom'
import { productInputs, userInputs } from './formSource'
function App() {

  return (
      <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<New input={userInputs} title="Add New User"/>} />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route path="new" element={<New input={productInputs} title="Add New Product"/>} />
            </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
