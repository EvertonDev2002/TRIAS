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
  containerCard: {
    width: "100%",
    height: "50%",
    marginVertical: 50,
    flexDirection: "column",
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
  },
  photo: {
    width: "99.9%",
    height: "100%",
    borderRadius: 35,
  },
  block: {
    height: 150,
    width: "100%",
    marginBottom: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  card: {
    width: "35%",
    height: "90%",
    borderRadius: 35,
    backgroundColor: blue,
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
  option: {
    alignItems: "center",
  },
});
