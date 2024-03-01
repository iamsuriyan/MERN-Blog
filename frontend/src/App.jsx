import { Route, Routes } from 'react-router-dom'
// import Footer from './Components/Footer'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import PostDetails from './Pages/PostDetails'
import CreatePost from './Pages/CreatePost'
import EditPost from './Pages/EditPost'
import Profile from './Pages/Profile'
import { UserContextProvider } from './context/UserContext'
import MyBlogs from './Pages/MyBlogs'

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route index path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/write' element={<CreatePost/>}/>
        <Route path='posts/post/:id' element={<PostDetails/>}/>
        <Route path='/myblogs/:id' element={<MyBlogs/>}/>
        <Route path='edit/:id' element={<EditPost/>}/>
        <Route path='profile/:id' element={<Profile/>}/>
      </Routes>
    </UserContextProvider>
  )
}

export default App
