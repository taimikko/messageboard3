import React from 'react';
import {Alert} from 'react-bootstrap';
import moment from 'moment';
/* moment -kirjastosta timeStampin formaatti */
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

const Message = ({message, _id, _rev, timeStamp, type}) => <Alert
    onDismiss={() => {
        fetch(`http://localhost:5984/messageboard/${_id}?rev=${_rev}`, {
            credentials: 'same-origin',
            method: 'DELETE'
        })
    }} bsStyle={type}>
    <Router>
        <div>
            <Link to={`/message/${_id}`}>{message}</Link>
            <Route path="/message/" component={message}/>
            <code>{moment(timeStamp).format('Y-DD-MM h:m:s')}</code>
            {type}
        </div>
    </Router>

</Alert>;

export default Message;


