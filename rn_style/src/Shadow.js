import React from 'react';
import {StyleSheet, View, Platform, Text } from 'react-native';

const Shadow = ()=>{
    return <View style = {styles.shadow}>
    <Text>
        {Platform.Os === 'ios'? 'ios': 'android'}
    </Text>
    </View>
}
const styles = StyleSheet.create({
    shadow: {
        width: 100,
        height:100,
        ...Platform.select({
            ios:{
                backgroundColor : '#e3e3e3',
                shadowColor: '#000000',
                shadowOffset :{
                    width : 10,
                    height: 10,
                },
                shadowOpacity:0.5,
            },
            android:{
                backgroundColor: 'green',
                elevation : 10,
            }
        }),
    },
})

export default Shadow;