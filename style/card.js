import { StyleSheet } from "react-native";

const blue = "#04C4D9";
const white = "#FFFFFF";

export default StyleSheet.create({
  legend: {
    fontSize: 17,
    color: white,
    fontFamily: "Nunito_500Medium",
  },
  photo: {
    width: "99.9%",
    height: "75%",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },
  card: {
    width: "35%",
    height: "90%",
    borderRadius: 35,
    alignItems: "center",
    backgroundColor: blue,
  },
});
