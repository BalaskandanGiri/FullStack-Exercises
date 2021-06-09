import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
const Filter = () => {
    const dispatch = useDispatch()
    const handleChange = (event) => {
        console.log(event.target.value)
        dispatch({type:'filter',content:event.target.value})
    }
    const style = {
        marginBottom: 10
    }

    return (
        <div style={style}>
        filter <input name="filter" onChange={handleChange} />
        </div>
    )
}

export default Filter