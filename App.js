import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import News from './Screen/News';

const stackNavigator = createStackNavigator({
 News: News
});

const App = createAppContainer(stackNavigator); 

/*export default function App() {
  return(
    <View style={styles.container}>
      <News/>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex : 1,
    justifyContent: 'center',
    backgroundColor:'#fff',
    alignItems:'center',
  },
});*/
export default App;