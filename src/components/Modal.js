import { StyleSheet, TextInput, View, Text } from "react-native";
import { Btn } from "./Button";
import { useState } from "react";

export const Modal = ({action, type, message, handleInitial}) => {
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [restMinutes, setRestMinutes] = useState(0);
    const [restSeconds, setRestSeconds] = useState(0);

    const handleInitialValue = (time)=>{
        if(time.type === "minute"){
            setMinutes(time.time*60);
        }
        
        if(time.type === "second"){
            setSeconds(time.time);
        }
        
        if(time.type === "restMinute"){
            setRestMinutes(time.time*60);
        }
        
        if(time.type === "restSecond"){
            setRestSeconds(time.time);
        }
    }

    const returnValues = ()=>{
        handleInitial(minutes, seconds, restMinutes, restSeconds);
        action();
    }

    return (
        <View style={style.container}>        
            <View style={style.views}>
                <Text style={style.title}>
                    Ajuste o tempo de trabalho:
                </Text>

                <View style={style.display} >
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
            </View>

                    
            <View style={style.views}>
                <Text style={style.title}>
                    Ajuste o tempo de descanso:
                </Text>

                <View style={style.display} >
                    <TextInput keyboardType="numeric" style={style.text} placeholder="00" onChangeText={min => {
                        handleInitialValue({
                            type: "restMinute",
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
                        setRestSeconds(sec);
                        handleInitialValue({
                            type: "restSecond",
                            time: sec
                        })
                    }}>
                        {restSeconds === 0 ? "" : restSeconds > 60 ? 59 : restSeconds }
                    </TextInput>
                </View>
            </View>
            <Btn action={returnValues} type={type} message={message} />
        
        </View>
  );
}

const style = StyleSheet.create({
    container : {
        alignItems: "center",
        justifyContent: "center",
        gap: 30
    },
    views:{        
        alignItems: "center",
        justifyContent: "center",
    },
    display: {
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
      fontSize: 25,
    },
    text: {
      color:"#999",
      fontSize: 70
    }
  });