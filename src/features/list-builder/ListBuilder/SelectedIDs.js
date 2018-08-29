import React, { Component } from 'react';

import { ListGroup, ListGroupItem, Button } from 'reactstrap';

const theme = require('../theme.css');

export default class SelectedIDs extends Component {

    render() {
        const { ids, removeId } = this.props;

        return (
            <div className={theme.selectedIDsWrapper}>
                <h3>IDs:</h3>
                <ListGroup>
                    { ids.map((id, i) => (
                        <ListGroupItem key={i}>
                            <span>{id}</span>
                            <Button outline onClick={() => removeId(id)}>
                                X
                            </Button>
                        </ListGroupItem>
                    )) }
                </ListGroup>

            </div>
        )
    }
}
