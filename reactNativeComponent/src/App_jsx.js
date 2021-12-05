import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const App =() =>{
    const name = 'Sumin';
    return(
        /*<View style={styles.container}>
            <Text style = {styles.title}>{name}, My Name is ChoiSumin~!</Text>
        </View>*/
        <View style = {styles.container}>
            <Text style = {styles.title}>
                {/* {(()=>{
                    if(name === 'Sumin') return 'My name is Sumin!';
                    else if (name=== 'Minkyung') return 'My name is Minkyung..';
                    else return 'My name is React!';
                })()}*/}
                My name is {name === 'Sumin' ? 'Sumin~':'React...'}
            </Text>
        </View>
    );
};

  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
        fontSize : 30,
    },
});
  
export default App;