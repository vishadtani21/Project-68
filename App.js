import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { Header } from 'react-native-elements';


import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import facebook from './screens/facebook';
import instagram from './screens/instagram';

export default class App extends React.Component {
  render(){
    return (
      
      <View style={styles.container}>
        <ImageBackground
        style = {styles.bg}
        source ={require('./assets/bg.jpg')}>

        <Header
          backgroundColor={'snowwhite'}
          centerComponent={{
            text: 'Buzz App',
            style: { 
              color: 'black',
              fontSize: 15, 
              fontWeight: 'bold',
             
             },
          }}
        />

        <AppContainer/>
        </ImageBackground> 
      </View>
      
      );
  }
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },

  bg:{
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  }
});


const TabNavigator = createBottomTabNavigator(
  {
    Facebook:{screen:facebook},
    Instagram:{screen:instagram},
  },

  {
    defaultNavigationOptions:({navigation}) => ({
      tabBarIcon: ()=>{
        const routeName = navigation.state.routeName;

        if(routeName === 'Facebook'){
          return(
            <Image
              style ={{width: 27, height:27}}
              source ={require('./assets/facebook.png')}
            />
          );

        }
        else if(routeName === 'Instagram'){
          return(
            <Image
              style ={{width: 30, height:30}}
              source ={require('./assets/instagram.jpg')}
            />
          );
        }
      }
    })

  }

)

const AppContainer = createAppContainer(TabNavigator);
