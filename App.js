import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import IndexScreen from './Screens/IndexScreen'
import ShowScreens from './Screens/ShowScreen'
import CreateScreen from './Screens/CreateScreen'
import EditScreen from './Screens/EditScreen'
import {Provider} from './context/BlogContext';
const AppNavigator=createStackNavigator({
  Index:IndexScreen,
  Show:ShowScreens,
  Create:CreateScreen,
  Edit:EditScreen
},{
  initialRouteName:"Index",
  defaultNavigationOptions:{
    title:"Blog"
  }
})

const Apps=createAppContainer(AppNavigator)

export default class App extends React.Component{

render(){
  return <Provider><Apps/></Provider>
}

}
// export default()=>{
//   return <Provider><Apps/></Provider>
// }
