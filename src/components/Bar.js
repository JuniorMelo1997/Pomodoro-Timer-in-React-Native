import { StyleSheet, View } from "react-native";

export const Bar = ({counter, initial}) => {
    const totalProgress = 100 - 100*(counter/initial)

    /* I usually put the style out of the component function, but i will need to use the "totalProgress" const, so i need to put it in the same scope in this case */
    const style = StyleSheet.create({
      total: {
          width: "80%",
          height: "1%",
          backgroundColor: "#fff",
          borderRadius: 10,
          marginBottom: 40,
      },
      progress: {
          width: `${totalProgress}%`,
          height: "100%",
          backgroundColor: "#2c2c2c",
          borderRadius: 10,
      }
  });

    return (
    <View className="total" style={style.total}>
      <View className="progress" style={style.progress}>

      </View>
    </View>
  );
}

