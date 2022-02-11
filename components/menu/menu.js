import Styles from "../../style/menu";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Text, View, TouchableOpacity } from "react-native";

export default Menu = (props) => {
  return (
    <View style={Styles.containerMenu}>
      <TouchableOpacity onPress={props.home} style={Styles.option}>
        <Icon style={Styles.icon} name="home" />
        <Text style={Styles.legend}>Início</Text>
      </TouchableOpacity>
      <TouchableOpacity style={Styles.option} onPress={props.gallery}>
        <Icon style={Styles.icon} name="photo-video" />
        <Text style={Styles.legend}>Galeria</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={props.class} style={Styles.option}>
        <Icon style={Styles.icon} name="user-graduate" />
        <Text style={Styles.legend}>Turma</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={props.management} style={Styles.option}>
        <Icon style={Styles.icon} name="chalkboard-teacher" />
        <Text style={Styles.legend}>Gestão</Text>
      </TouchableOpacity>
    </View>
  );
};
