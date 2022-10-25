import React from "react"
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom"

export const Layout = ({ name }) => {

    const location = useLocation()
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(-1)
    }

    return (
        name ?
            <>
                <h1>Welcome {name}</h1>
                <Outlet />
                <button onClick={handleClick}>Back</button>
            </>
            :
            <Navigate to='/login' />
    )
}