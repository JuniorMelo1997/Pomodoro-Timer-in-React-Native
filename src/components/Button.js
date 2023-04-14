import { StyleSheet, View, Text, TouchableOpacity } from "react-native"

export const Btn = ()=>{
    return (
        <View style={style.container}>
            <TouchableOpacity>
                <Text style={style.text}>
                    Começar
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
      backgroundColor: '#2c2c2c',
      height: 100,
      width: 250,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color:"#f3f3f3",
      fontSize: 40
    }
  });