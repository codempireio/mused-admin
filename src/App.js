import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import { stores } from './stores';
import { initClient } from './services';
import { AuthControls } from './features/auth-controls'

class App extends Component {
    state = {
        isLoadingComplete: false,
        errorMessage: null
    };

    componentDidMount() {
        initClient().then(
            () => this.setState({isLoadingComplete: true}),
            (error) => this.setState({errorMessage: error.message}))
    }

    render() {
        if (!this.state.isLoadingComplete) {
            return (
                <div>
                    <h3>Loading...</h3>
                </div>
            )
        }

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
