import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Btn } from './src/components/Button';
import { Timer } from './src/components/Timer';



export default function App() {
  return (
    <View style={styles.container}>

      <Text style={styles.text}>
        Time to Work
      </Text>

      <Btn />
      
    <Timer />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color:"#EB423F",
    fontSize: 20
  }
});
