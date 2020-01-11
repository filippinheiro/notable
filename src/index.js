import RootStack from './routes'
import {createAppContainer} from 'react-navigation'
import './config/StatusBarConfig'

const App = createAppContainer(RootStack)

export default App