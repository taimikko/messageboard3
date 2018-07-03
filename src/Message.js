import React from 'react';
import { Alert } from 'react-bootstrap';

const Message = ({ message ,_id, _rev , timeStamp, type}) => <Alert onDismiss={() => {
    fetch(`http://localhost:5984/messageboard/${_id}?rev=${_rev}`, {
        credentials: 'same-origin',
        method: 'DELETE'
    })
} } bsStyle={type}>{message} {timeStamp} {type}  </Alert>;

export default Message;

/* moment -kirjastosta timeStampin formaatti */
