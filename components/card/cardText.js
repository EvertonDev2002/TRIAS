import Styles from "../../style/cardText";
import { Text, View } from "react-native";
export default CardText = (props) => {
  return (
    <View>
      <Text style={Styles.text}>líder: {props.leader}</Text>
      <Text style={Styles.text}>Vice-líder: {props.viceLeader}</Text>
      <Text style={Styles.text}>Secretário (a): {props.secretary}</Text>
      <Text style={Styles.text}>Diretor (a) de turma: {props.director}</Text>
    </View>
  );
};
