import React from 'react'
import {View, Button, Text, StyleSheet, StatusBar} from 'react-native'
import { connect } from 'react-redux';

import Auth from './Auth';
import Main from './Main';

class AppEntry extends React.Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('title', '')
        }
    }

    componentDidMount() {
        StatusBar.setHidden(true);
    }

    render() {
        if(this.props.auth.isSignedIn) {
            return (
                <View style={styles.container} >
                    <Main navigation={this.props.navigation} />
                </View>
            );
        }
        else {
            return (
                <View style={styles.container}>
                    <Auth navigation={this.props.navigation} />
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

const mapStateToProps = (state) => {
    return { auth: state.auth };
}

export default connect(mapStateToProps)(AppEntry);