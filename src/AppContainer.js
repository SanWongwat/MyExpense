import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator} from 'react-navigation-drawer';

import AppEntry from './views/AppEntry';
import EditBalance from './views/EditBalance';
// import Auth from './views/Auth';

const AppStack = createStackNavigator({
    AppEntry: {
        screen: AppEntry,
        // navigationOptions: {
        //     headerTitle: 'Welcome!'
        // }
    },
    EditBalance: {
        screen: EditBalance
    }
});

const MainStack = createDrawerNavigator({
    AppStack: {
        screen: AppStack
    }
});

export default createAppContainer(MainStack);
