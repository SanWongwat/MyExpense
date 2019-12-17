import React from 'react';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';
import { connect } from 'react-redux';

import { signIn, signingIn, signedIn } from '../actions/auth';

class GoogleAuth extends React.Component {
    constructor(props) {
        super(props);
    }

    async componentDidMount() {
        GoogleSignin.configure({
            scopes: ['email', 'profile'], 
            webClientId: '658768205055-l6r6he2ujosusidmhg6bncod80h2tdee.apps.googleusercontent.com',
        });
        // this.props.signingIn();
        const isSignedIn = await  GoogleSignin.isSignedIn();
        console.log(isSignedIn);
        if(isSignedIn){
            this.getGoogleUserInfo();
        }
        console.log('props =>', this.props);
    }

    getGoogleUserInfo = async () => {
        try {
            const userInfo = await GoogleSignin.signInSilently();
            this.props.signIn({
                isSignedIn: true,
                userInfo
            })
        }
        catch(error) {
            console.log(error);
        }
        this.props.signedIn();
    }

    onSigninPress = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            this.props.signingIn();
            const userInfo = await GoogleSignin.signIn();
            console.log('User Info => ', userInfo);
            this.props.signIn({
                isSignedIn: true,
                userInfo
            })
        }
        catch(error) {
            console.log(error);
        }
        this.props.signedIn();
    }

    render() {
        return (
        <GoogleSigninButton 
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Light}
        onPress={this.onSigninPress}
        />);
    }
}

export default connect(null, { signIn, signingIn, signedIn })(GoogleAuth);