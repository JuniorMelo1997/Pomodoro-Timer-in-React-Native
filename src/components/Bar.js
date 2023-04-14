/* Create a load bar component */

import { StyleSheet, View } from "react-native";

export const Bar = () => {
    return (
    <View className="total" style={style.total}>
      <View className="progress" style={style.progress}>

      </View>
    </View>
  );
}

const style = StyleSheet.create({
    total: {
        width: "80%",
        height: "1%",
        backgroundColor: "#fff",
        borderRadius: 10,
        marginBottom: 40,
    },
    progress: {
        width: "30%",
        height: "100%",
        backgroundColor: "#2c2c2c",
        borderRadius: 10,
    }
});