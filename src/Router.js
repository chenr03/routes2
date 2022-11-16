import React from 'react'
import { Routes, Route, Navigate } from 'react-router'
import cookie from 'cookie'
import Home from './components/Home'
import About from './components/About'
import Car from './components/Car'
import Login from './components/Login'

// Write checkAuth function here
// Check the cookies for a cookie called "loggedIn"
const checkAuth = () => {
    const cookies = cookie.parse(document.cookie);
        return !!cookies['loggedin'];

};

const ProtectedRoute = (props) => {
    const {component: Component, ...rest } = props
    // console.log (rest)
    return checkAuth() === true ? <Component { ...rest }/> : <Navigate to = "/login" />

}

// Write ProtectedRoute function here


const Router = () => {
    return (
        <Routes>
            <Route path="/" element={ <ProtectedRoute component={Home} isTacoGood = "true" size = "tiny" /> } />
            <Route path="/login" element={<Login/>} />
            <Route path="/about" element={ <ProtectedRoute component={About} /> } />
            <Route path="/car/:id" element={ <ProtectedRoute component={Car} /> } />
        </Routes>
    );
};

export default Router;