import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';

const MyButton = ({title , onPress, children}) => {
    //console.log(props.children);
    return (
        <TouchableOpacity
            onPress = {onPress}
            pressRetentionOffset = {{bottom:100, top: 10, left: 10, right: 10 }}
        >
            <View style = {{backgroundColor: 'red', padding: 10, margin:10}}>
                <Text style = {{color: 'white', fontSize: 24}}>
                    {children || title}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

MyButton.defaultProps = {
    title: "default",
    onPress : () =>{alert('defualt')},
};

export default MyButton;  
