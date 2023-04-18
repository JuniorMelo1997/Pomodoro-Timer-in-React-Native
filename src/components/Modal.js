import { StyleSheet, TextInput, View, Text } from "react-native";
import { Btn } from "./Button";
import { useState } from "react";

export const Modal = ({action, type, message, handleInitial}) => {
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const handleInitialValue = (time)=>{
        if(time.type === "minute"){
            setMinutes(time.time*60);
        }
        
        if(time.type === "second"){
            setSeconds(time.time);
        }
    }

    const returnValues = ()=>{
        handleInitial(minutes, seconds);
        action();
    }

    return (
        <>        
        <Text style={style.title}>
            Ajuste o tempo
        </Text>

        <View style={style.container} >
            <TextInput keyboardType="numeric" style={style.text} placeholder="00" onChangeText={min => {
                handleInitialValue({
                    type: "minute",
                    time: min
                })
            }}>

            </TextInput>

            <Text style={style.text}>
                :
            </Text>

            <TextInput keyboardType="numeric" style={style.text} placeholder="00" onChangeText={sec => {
                if(sec >= 60){
                    sec = 59;
                }
                setSeconds(sec);
                handleInitialValue({
                    type: "second",
                    time: sec
                })
            }}>
                {seconds === 0 ? "" : seconds > 60 ? 59 : seconds }
            </TextInput>
        </View>

        <Btn action={returnValues} type={type} message={message} />
        
    </>
  );
}

const style = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      flexDirection: "row",
      height: 150,
      width: 250,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title:{        
      color:"#2c2c2c",
      fontSize: 40
    },
    text: {
      color:"#999",
      fontSize: 70
    }
  });