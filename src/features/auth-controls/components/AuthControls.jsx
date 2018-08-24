import React, { Component } from 'react';
import theme from '../theme';
import {
    loginViaFBProvider,
    updateUser } from '../../../services'

import { Container,  Row, Col, Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';

export default class AuthControls extends Component {
    state = {
        userData: null,
        errorMsg: null
    };

    _handleLogin = async () => {
        const { setUser } = this.props;
        const testUser = {
            userId: 'test-id',
            userData: {
                profile: {},
                details: {}
            }
        };
        setUser(testUser)
        // let authData;
        // try {
        //      authData = await Facebook.logInWithReadPermissionsAsync('2127807207434704', {
        //         permissions: ['public_profile', 'email'],
        //         behavior: this.isAStandaloneApp() ? 'native' : 'web'
        //     });
        // } catch (err) {
        //     console.error(err)
        // }
        // const { type, token } = authData;
        //
        // if (type === 'success') {
        //     // login into Stitch app using FB token
        //     loginViaFBProvider(token).then((data: any) => {
        //         const userId = data.auth.authInfo.userId;
        //         const userProfile = data.auth.authInfo.userProfile.data;
        //
        //         this._updateUser(userId, userProfile);
        //     }, (error: Error) => this.setState({errorMsg: error.message}))
        // } else {
        //     console.error(`Facebook.logInWithReadPermissionsAsync: ${type}`);
        // }
    };

    // _updateUser = (userId, userProfile) => {
    //     updateUser(userProfile).then(
    //         () => {
    //             this.props.setUserDetails(userId, userProfile)
    //         },
    //         error => console.log(error)
    //     );
    // };

    render() {
        return (
            <Container>
                <Row>
                    <Col xs="6">
                        <Form>
                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                            </FormGroup>
                            { this.state.errorMsg && <Alert color="danger">
                                { this.state.errorMsg }
                            </Alert> }

                            <Button
                                onClick={this._handleLogin}
                            >
                                Log In
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    };
}
