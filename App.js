import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Display } from './src/components/Display';
import { Btn } from './src/components/Button';
import { Bar } from './src/components/Bar';

export default function App() {
  return (
    <View style={styles.container}>
      <Bar />
      <Display />
      <Btn />
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
