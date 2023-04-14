import { StyleSheet, View, Text } from "react-native"

export const Display = ()=>{
    return (
        <View style={style.container}>
            <Text style={style.text}> 
                00:00
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      height: 150,
      width: 250,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color:"#2c2c2c",
      fontSize: 70
    }
  });