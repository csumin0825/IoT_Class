import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

const MyButton = props => {
    console.log(props);
    return (
        <TouchableOpacity
            style = {{
                backgroundColor : '#3498db',
                padding : 16,
                margin : 10,
                borderRadius: 8,
            }}
            onPress = {() => alert('Click!!!')}
        >
            <Text style = {{color : 'white', fontSize : 24}}>
                {/* MyButton~ */}
                {props.children || props.title} 
                {/* {props.title || props.children} 이면 두 버튼 다 'Button 속성 전달' */}
            </Text>
        </TouchableOpacity>
    );
};

export default MyButton;  
