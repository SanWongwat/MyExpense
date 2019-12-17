import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

import GoogleAuth from '../components/GoogleAuth';

class Auth extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.navigation.setParams({title: 'Sign in'});
    }

    render() {
        if(this.props.auth.signingIn) {
            return <ActivityIndicator />;
        }
        else {
            return (
                <View>
                    <GoogleAuth />
                </View>
            );
        }
    }
}

const mapStateToProps = (state) => {
    return { auth: state.auth };
}

export default connect(mapStateToProps)(Auth);