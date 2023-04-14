import { StyleSheet, View, Text } from "react-native"

export const Display = ({counter})=>{
    const min = String(Math.floor(counter/60) < 10 ? "0" + Math.floor(counter/60) : Math.floor(counter/60))
    const sec = String((counter - 60*min) < 10 ? "0" + (counter - 60*min) : (counter - 60*min));
    return (
        <View style={style.container}>
            <Text style={style.text}> 
                {min}:{sec}
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