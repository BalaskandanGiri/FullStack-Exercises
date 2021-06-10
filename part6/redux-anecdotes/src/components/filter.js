import React from 'react'
import { useDispatch,connect } from 'react-redux'
import { filter } from '../reducers/filterReducer'
const Filter = (props) => {
    const handleChange = (event) => {
        console.log(event.target.value)
        props.filter(event.target.value)
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

const mapStatetoProps = (state) => {
	return {
		notification: state.notification,
	}
}

const mapDispatchToProps = {
    filter
}

const connectedFilter = connect(mapStatetoProps ,mapDispatchToProps)(Filter)
export default connectedFilter