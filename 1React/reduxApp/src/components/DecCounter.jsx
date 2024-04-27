import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increaseCounter } from './store/counterSlice'

function DecCounter() {
    const cnt = useSelector((state) => state.cnt)
    const dispatch = useDispatch()

    const onclickHandler = (e) => {
        e.preventDefault();
        dispatch(increaseCounter(cnt - 1))
    }

    return (
        <button
            onClick={onclickHandler}
        >Dec</button>
    )
}

export default DecCounter
