import React from "react"
import { useNavigate } from "react-router-dom"

import '../styles/login.css'

export const Login = ({ setName }) => {

    const navigate = useNavigate()

    const [pseudo, setPseudo] = React.useState('')
    const [password, setPassword] = React.useState('')

    const handleSubmit = e => {
        e.preventDefault()
        setName(pseudo)
        navigate('/')
    }

    return (
        <form className="form">
            <label>Pseudo:
                <input type="text" value={pseudo} onChange={e => setPseudo(e.target.value)} />
            </label>
            <label>Password:
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            </label>
            <button type="submit" onClick={handleSubmit}>Envoyer</button>
        </form>
    )
}