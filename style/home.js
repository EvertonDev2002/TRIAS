import { StyleSheet } from "react-native";

const blue = "#04C4D9";
const white = "#FFFFFF";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: blue,
  },
  title: {
    top: 80,
    fontSize: 50,
    color: white,
    textAlign: "center",
    position: "absolute",
    fontFamily: "Nunito_800ExtraBold",
  },
});
