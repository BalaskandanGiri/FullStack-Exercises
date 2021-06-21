import '../index.css'
import React from 'react'
import { Alert } from 'react-bootstrap'

const Notification = ({ message , type }) => {
    if (message === null) {
        return null
    }

    return (
        // <div className={type}>
        //     {message}
        // </div>
        <Alert variant={type === 'success'? 'success': 'danger'}>
            {message}
        </Alert>
    )
}

export default Notification
