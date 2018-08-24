import React, { Component } from 'react';

import ListBuilder from './ListBuilder';

function CollectionHOC(ListBuilder) {

    class NewComp extends Component {

        render() {
            return <ListBuilder/>
        }

    }
    return NewComp;
}

export default CollectionHOC(ListBuilder);
