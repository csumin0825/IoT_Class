import React from 'react';
import {Text, View, Button } from 'react-native';
import MyButton from './components/MyButton';

const App =() =>{
    return(
        <View style = {{
            flex : 1,
            background : '#fff',
            alignItems : 'center',
            justifyContent : 'center',
        }}>

            <Text style = {{fontSize : 30, marginBottom : 10}}>
                MyButton Component    
            </Text>
            <Button title = 'Button' onPress = {() => alert('Click!!')} />
        </View>
    ); 
};
  
export default App;