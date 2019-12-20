import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { GoogleSignin } from 'react-native-google-signin';
import { connect } from 'react-redux';
import { signOut, signingIn, signedIn } from '../actions/auth';

class GoogleSignOut extends React.Component {
    constructor(props) {
        super(props);
        GoogleSignin.configure({
            scopes: ['email', 'profile'],
            webClientId: '',
        });
    }

    onSignoutPress = async () => {
        this.props.signingIn();
        try {
            await GoogleSignin.revokeAccess();
            await GoogleSignin.signOut();
        }
        catch(error) {
            console.log(error);
        }
        this.props.signOut();
        this.props.signedIn();

    }

    render() {
        return (
            <View>
                <Button title="Sign out" onPress={this.onSignoutPress} />
            </View>
        );
    }
}

export default connect(null, { signOut, signingIn, signedIn })(GoogleSignOut);
