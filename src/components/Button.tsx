import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export function Btn() {
    return (
      <TouchableOpacity style={styles.container}>
          <Icon name="play" size={270} color="#EB423F" />
          {/* <Icon name="pause-circle" size={270} color="#EB423F" /> */}
      </TouchableOpacity>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      width: 290,
      height: 290,
      borderRadius: 50,
      borderWidth: 4,
      borderColor: "#eee"
    },
  });