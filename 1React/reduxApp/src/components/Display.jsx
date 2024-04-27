import React from 'react'
import { useSelector } from 'react-redux'

function Display() {
    const cnt = useSelector((state) => state.cnt)
    console.log("cnt: ", cnt);
    return (
        <div>Count: {cnt}</div>
    )
}

export default Display
