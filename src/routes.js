import {createStackNavigator} from 'react-navigation-stack'
import colors from './values/colors'

import Main from './pages/Main'
import NoteDetail from './pages/NoteDetail'

const RootStack = createStackNavigator({
    Main,
    NoteDetail
}, {
    defaultNavigationOptions : {
        headerStyle: {
            backgroundColor: colors.primaryGreen,
        },
        headerTintColor: '#fff',
        headerTitleStyle : {
            fontWeight: 'bold',
        }
    }
})

export default RootStack