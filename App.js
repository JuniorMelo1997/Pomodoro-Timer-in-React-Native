import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import { Display } from './src/components/Display';
import { Btn } from './src/components/Button';
import { Bar } from './src/components/Bar';
import { useEffect, useState } from 'react';
import { Modal } from './src/components/Modal';

export default function App() {
  const [initial, setInitial] = useState(25*60);
  const [settingTime, setSettingTime] = useState(false);
  const [counter, setCounter] = useState(initial);
  const [isCounting, setIsCounting] = useState(false);

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
  
  const restart = ()=>{
    setCounter(initial)
  }

  useEffect(()=>{
    if(counter === 0){
      setIsCounting(false);
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
        <Display counter={counter} />
        <Btn action={handleIsCounting} type = "start" message={isCounting ? "Parar" : "Começar"} disabled={false} />
        <Btn action={restart} type = "restart" message={"Resetar"} disabled = {isCounting ? true : false} />
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
  }
});
