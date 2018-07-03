import React from 'react';
import {PouchDB, Find} from 'react-pouchdb';
import {Col, Grid, Row} from 'react-bootstrap';
import Form from './Form';
import Message from './Message';
import {dbName} from './db';

const App = () => (
    <PouchDB name={dbName}>
        <Grid fluid>
            <h1>Message Board</h1>
            <Row>
                <Col xs={12} sm={7} md={8} lg={9}>
                    <Find
                        selector={{
                            message: {$gte: null}
                        }}
                        render={({docs}) =>
                            docs.sort((a, b) => b.timeStamp - a.timeStamp)
                                .map(doc => <Message key={doc._id} {...doc} />)
                        }
                    />
                </Col>
                <Col xs={12} sm={5} md={4} lg={3}>
                    <Form/>
                </Col>
            </Row>
        </Grid>
    </PouchDB>
);

export default App;
