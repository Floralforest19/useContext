import React from 'react'
import { useContext} from 'react'
import { TitleContext } from '../contexts/TitelContext'

export default function GreateGrandChild( ) {
 const { title, setTitle } = useContext(TitleContext)
    return (
        <div>
            <p>GreateGrandChild - <small>{title}</small></p>
            <button onClick={() => setTitle("Hej")}>Ändra Title</button>
            <h3></h3>
        </div>
    )
}
