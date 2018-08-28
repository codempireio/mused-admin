import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

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
                            {`#${id}  `}
                            <Button outline onClick={() => removeId(id)}>
                                Remove
                            </Button>
                            <CopyToClipboard text={id}>
                                <Button outline>Copy</Button>
                            </CopyToClipboard>
                        </ListGroupItem>
                    )) }
                </ListGroup>

            </div>
        )
    }
}
