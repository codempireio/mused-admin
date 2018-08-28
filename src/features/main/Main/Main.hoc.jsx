import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { ROOT_STORE } from "../../../stores";

import Main from './Main';

function CollectionHOC(Main) {
    @inject(ROOT_STORE)

    @observer
    class NewComp extends Component {
        render() {
            return <Main />
        }

    }
    return NewComp;
}

export default CollectionHOC(Main);
