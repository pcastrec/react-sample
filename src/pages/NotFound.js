import { useParams } from "react-router-dom"

export const NotFound = () => {

    const { pages } = useParams()

    return (
        <h1>Error: La page a l'adresse {pages} n'existe pas</h1>
    )
}