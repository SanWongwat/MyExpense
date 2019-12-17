import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import styled from 'styled-components';
import { PrimaryButton } from '../components/styled/Button';
// import GoogleSignout from '../components/GoogleSignOut';

const Header = styled.Text`
    font-size: 20
`;

class Main extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.navigation.setParams({title: 'Summary'});
    }

    render() {
        return (
            <View>
                <Header>Main Screen</Header>
                <PrimaryButton />
            </View>
        );
    }
}

export default Main;