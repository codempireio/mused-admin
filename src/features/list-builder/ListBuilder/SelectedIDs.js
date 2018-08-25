import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

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
                            {`#${id}  `}
                            <span style={{cursor: 'pointer'}}
                            onClick={() => removeId(id)}
                            >X</span>
                        </ListGroupItem>
                    )) }
                </ListGroup>

            </div>
        )
    }
}
