import { StyleSheet } from "react-native";

const white = "#FFFFFF";

export default StyleSheet.create({
  legend: {
    fontSize: 17,
    color: white,
    fontFamily: "Nunito_500Medium",
  },
  icon: {
    color: white,
    fontSize: 28,
  },
  containerMenu: {
    bottom: 30,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    justifyContent: "space-evenly",
  },
  option: {
    alignItems: "center",
  },
});
