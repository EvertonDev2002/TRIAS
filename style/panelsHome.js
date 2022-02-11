import { StyleSheet } from "react-native";

const blue = "#04C4D9";
const white = "#FFFFFF";

export default StyleSheet.create({
  phrase: {
    color: blue,
    fontSize: 20,
    marginBottom: 60,
    fontFamily: "Raleway_500Medium_Italic",
  },
  legend: {
    fontSize: 17,
    color: white,
    fontFamily: "Nunito_500Medium",
  },
  icon: {
    color: white,
    fontSize: 35,
  },
  containerCard: {
    height: "90%",
    width: "100%",
    flexDirection: "column",
  },
  block: {
    width: "100%",
    height: "30%",
    marginBottom: 50,
    flexDirection: "row",
  },
  card: {
    margin: 20,
    width: "40%",
    height: "100%",
    borderRadius: 35,
    alignItems: "center",
    backgroundColor: blue,
    justifyContent: "center",
  },
  content: {
    bottom: 0,
    height: "80%",
    width: "100%",
    paddingTop: 80,
    paddingLeft: 7,
    paddingRight: 7,
    position: "absolute",
    alignItems: "center",
    backgroundColor: white,
    flexDirection: "column",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
  },
});
