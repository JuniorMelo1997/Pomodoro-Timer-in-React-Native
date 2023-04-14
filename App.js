import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Display } from './src/components/Display';
import { Btn } from './src/components/Button';
import { Bar } from './src/components/Bar';
import { useEffect, useState } from 'react';

export default function App() {
  const [initial, setInitial] = useState(25*60);
  const [counter, setCounter] = useState(initial);
  const [isCounting, setIsCounting] = useState(false);

  const timeCounter = setTimeout(()=>{
    changeCounter();
  }, 1000);

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
    console.log(counter, isCounting);
    
    if(counter === 0){
      setIsCounting(false);
    }

    if(isCounting){
      timeCounter;
    };
    
  }, [counter, isCounting])

  return (
    <View style={styles.container}>
      <Bar counter={counter} initial={initial} />
      <Display counter={counter} />
      <Btn action={handleIsCounting} type = "start" message={isCounting ? "Parar" : "Começar"} disabled={false} />
      <Btn action={restart} type = "restart" message={"Resetar"} disabled = {isCounting ? true : false} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 15,
    backgroundColor: '#f3f3f3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
