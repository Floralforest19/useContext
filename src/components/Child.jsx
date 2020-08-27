import React from 'react'
import GrandChild from './GrandChild'

export default function Child() {
    return (
        <div>
            <p>Child - <small></small></p>
            <GrandChild  />
        </div>
    )
}
