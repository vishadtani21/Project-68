import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class instagram extends React.Component{
    render(){
        return(
        <View style ={{flex:1}}>
           <Text style = {{
            alignSelf:'center',
            marginTop:300,
          }}> 
            Welcome to Instagram!
          </Text>
        </View>
        );
    }
}