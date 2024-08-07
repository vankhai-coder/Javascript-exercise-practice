import { Route, Routes } from "react-router"
import Login from './components/Login'
import Admin from './components/Admin'
import User from './components/User'
import ErrorPage from "./components/ErrorPage"
import RegisterPage from "./components/Register"
import Quiz from "./components/Quiz"
import TopScore from "./components/TopScore"
import Review from "./components/Review"
import ManageQuiz from "./components/ManageQuiz"
import ManageAccount from "./components/ManageAccount"

const App = () => {
    return (

        // set up Router : 
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/log-in" element={<Login />} />
            <Route path="/user" element={<User />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/error-page" element={<ErrorPage />} />
            <Route path="/register-page" element={<RegisterPage />} />
            <Route path="user/do-quiz" element={<Quiz />} />
            <Route path="/top-score" element={<TopScore />} />
            <Route path="user/review" element={<Review />} />
            <Route path="admin/manage-quiz" element={<ManageQuiz />} />
            <Route path="admin/manage-account" element={<ManageAccount />} />
        </Routes>
    )
}

export default App