import React from "react"
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom"

export const Layout = ({ name }) => {

    const location = useLocation()
    const navigate = useNavigate()

    const handleBack = () => {
        navigate(-1)
    }

    const handleAbout = () => {
        navigate('about')
    }

    return (
        name ?
            <>
                <h1>Welcome {name}</h1>
                <Outlet />
                <button onClick={handleBack}>Back</button>
                <button onClick={handleAbout}>About</button>
            </>
            :
            <Navigate to='/login' />
    )
}