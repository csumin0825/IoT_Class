import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import propTypes from 'prop-types';

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

MyButton.defaultProps = {  // 파라미터 기본값 설정 
    title: "default",
    onPress : () =>{alert('defualt')},
};

MyButton.propTypes = {  // 반드시 넘겨줘야할 값
    title: propTypes.string,
    onPress: propTypes.func,
    title2 : propTypes.string.isRequired,
}

export default MyButton;  
