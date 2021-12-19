import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {styles, orangeText} from './style';

export default function App() {
  return (
    <View style={styles.container}>
        <Text style = {styles.text}>
            Style Code!!!
        </Text>
        {/* <Text style ={[ styles.text, styles.errorText ]}> */}
        <Text style ={[ styles.text, orangeText ]}>
            Error Text Style!!!
        </Text>
      <StatusBar style="auto" />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text: {
//       backgroundColor: 'black',
//       color:'white',
//       fontSize: 20
//   },
//   errorText: {
//     //   backgroundColor: '#ffffff',
//       color: 'red',
//     //   fontSize: 20
//   }
// });
