import Styles from "../../style/card";
import { Text, View, Image } from "react-native";

export default Card = (props) => {
  return (
    <View style={Styles.card}>
      <Image style={Styles.photo} source={{ uri: props.photo }} />
      <Text style={Styles.legend}>{props.legend}</Text>
    </View>
  );
};
