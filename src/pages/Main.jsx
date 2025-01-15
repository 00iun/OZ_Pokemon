import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

function Main() {
    const pokemon = useSelector(state => state.apiReducer)

    useEffect(() => { console.log('Main.jsx 호출됨') }, [pokemon])

    return (
        <div>Main</div>
    )
}

export default Main