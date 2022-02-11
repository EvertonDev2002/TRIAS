import Styles from "../../style/cardOne";
import { Text, View, Image } from "react-native";

export default CardOne = (props) => {
  return (
    <View style={Styles.card}>
      <Image style={Styles.photo} source={{ uri: props.photo }} />
      <Text style={Styles.legend}>{props.legend}</Text>
    </View>
  );
};
