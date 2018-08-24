import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import { stores } from './stores';
import { AuthControls } from './features/auth-controls'

class App extends Component {
    render() {
        return (
            <Provider {...stores}>
                <div style={styles.container}>
                    {<AuthControls />}
                </div>
            </Provider>
        );
    }
}

export default App;

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#fff',
        position: 'relative'
    },
};
