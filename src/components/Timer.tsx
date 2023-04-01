import { StyleSheet, Text, View } from 'react-native';

export const Timer = ()=>{
    return (
        <Text style={styles.text}>
            25:00:00
        </Text>
    )}


const styles = StyleSheet.create({
      text: {
          color:"#EB423F",
          fontSize: 20
       }
})