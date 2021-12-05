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
            <MyButton title  = 'Button 속성 전달'/>
            <MyButton title  = 'Button 속성 전달'> Childern Props </MyButton>
        </View>
    ); 
};
  
export default App;