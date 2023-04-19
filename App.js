import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import { Display } from './src/components/Display';
import { Btn } from './src/components/Button';
import { Bar } from './src/components/Bar';
import { useEffect, useState } from 'react';
import { Modal } from './src/components/Modal';

export default function App() {
  const [initial, setInitial] = useState(25*60);
  const [isResting, setIsResting] = useState(false);
  const [restTime, setRestTime] = useState(10);
  const [settingTime, setSettingTime] = useState(false);
  const [counter, setCounter] = useState(initial);
  const [isCounting, setIsCounting] = useState(false);

  console.log(counter, isCounting, isResting);

  const timeCounter = setTimeout(()=>{
    changeCounter();
  }, 1000);

  const handleInitial = (min, sec)=>{
    /* min is already in seconds format (minutes*60). It cames in this format from the Modal component */
    
    if(min === 0 && sec === 0){  
    } else{      
      setInitial(min + sec);
    }
  }

  const handleSettingTime = ()=>{
    setSettingTime(!settingTime);
  }

  const handleIsCounting = ()=>{    
    if(!isCounting && counter === 0){
      restart();
    }

    setIsCounting(!isCounting);
    stop();
  }

  const changeCounter = ()=>{
    if(isCounting && counter > 0){
      setCounter(counter - 1);
    }
  }

  const stop = ()=>{           
    clearTimeout(timeCounter);
  }
  
  const reset = ()=>{
    setIsResting(false);    
    setCounter(initial);
  }

  const restart = ()=>{
    if(isResting){
      setCounter(restTime)
    } else{        
      setCounter(initial)
    }
  }

  useEffect(()=>{
    if(counter === 0){
      setIsCounting(false);
    }

    if(counter === 0 && isCounting){      
      setIsResting(resting => !resting);
    }

    if(isCounting){
      timeCounter;
    };
    
  }, [counter, isCounting])

  useEffect(()=>{
    setCounter(initial);
  }, [initial])

  if(!settingTime){
    return (
      <View style={styles.container}>
        <Bar counter={counter} initial={initial} />
        <Text style={styles.title}>
          {isResting ? "Calma! Hora de descansar" : "Vamos lá! Hora de trabalhar" }
        </Text>
        <Display counter={counter} />
        <Btn action={handleIsCounting} type = "start" message={isResting && isCounting ? "Pausar Descanso" : isResting && !isCounting ? "Descansar" : isCounting ? "Parar" : "Começar"} disabled={false} />
        <Btn action={reset} type = "restart" message={"Resetar"} disabled = {isCounting ? true : false} />
        <Btn action={handleSettingTime} type = "set" message={"Ajustar"} disabled = {isCounting ? true : false} />
        <StatusBar style="auto" />
      </View>
    );
  }

  
  return (
    <View style={styles.container}>
      <Modal action={handleSettingTime} type="start" message={"Voltar"} handleInitial={handleInitial} />
    </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 15,
    backgroundColor: '#f3f3f3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{        
    color:"#2c2c2c",
    fontSize: 25
  }
});
