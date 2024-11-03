import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './pages/Login/index.jsx'
import SignupPage from './pages/Signup/index.jsx'
import PostPage from './pages/Post/index.jsx'
import HomePage from './pages/Home/Index.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <HomePage/>
            },
            {
                path: "/login",
                element: <LoginPage />
            },
            {
                path: "/signup",
                element: <SignupPage/>
            },
            {
                path: "/post/:id",
                element: <PostPage />
            }
        ]
    }
])


createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
)
