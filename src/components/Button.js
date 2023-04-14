import { StyleSheet, Text, TouchableOpacity } from "react-native"

export const Btn = ({action, type, message, disabled})=>{
    return (
        <TouchableOpacity 
            activeOpacity={0.8} 
            onPress={action} 
            style={type === "start" ? style.buttonStartPause : style.buttonRestart}
            disabled={disabled} >
            <Text style={type === "start" ? style.textStartPause : disabled ? style.textRestartDiabled  : style.textRestart}>
                {message}
            </Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    buttonStartPause: {
      backgroundColor: '#2c2c2c',
      height: 100,
      width: 250,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonRestart:{        
      backgroundColor: '#f3f3f3',
      height: 100,
      width: 250,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    textStartPause: {
      color:"#f3f3f3",
      fontSize: 40
    },
    textRestart:{
        color: "#E64A19",
        fontSize: 40
    },
    textRestartDiabled:{         
        opacity: 0,
        height: 0,
        width: 0
    }
  });