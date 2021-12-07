import React from 'react';
import { StyleSheet, View } from 'react-native';
import MyButton from './components/MyButton';

// const App =() =>{
//     return(
//         <View style = {{
//             flex : 1,
//             background : '#fff',
//             alignItems : 'center',
//             justifyContent : 'center',
//         }}>

//             <Text style = {{fontSize : 30, marginBottom : 10}}>
//                 MyButton Component    
//             </Text>
//             <MyButton title  = 'Button 속성 전달'/>
//             <MyButton title  = 'Button 속성 전달'> Childern Props </MyButton>
//         </View>
//     ); 
// };
  
export default function App(){
    return (
        <View style = { styles.container}>
            <MyButton title = 'String'/>
            <MyButton title = "MyButton 2" onPress = { () => alert("2")}/>
            <MyButton>children</MyButton>
        </View>
    );
}
const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor: '#fff',
        alignItems : 'center',
        justifyContent : 'center',
    },
});