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
    bottom: 100,
    color: white,
    fontSize: 50,
    textAlign: "center",
    position: "absolute",
    fontFamily: "Nunito_800ExtraBold",
  },
  content: {
    top: 0,
    height: "80%",
    width: "100%",
    position: "absolute",
    alignItems: "center",
    backgroundColor: white,
    flexDirection: "column",
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
  },
});
