import Styles from "../../style/panelsHome";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Text, View, TouchableOpacity } from "react-native";

export default PanelsHome = (props) => {
  return (
    <View style={Styles.content}>
      <Text style={Styles.phrase}>
        "Há coisas que são boas por alguns instantes, outras por algum tempo. Só
        algumas são para sempre."
      </Text>
      <View style={Styles.containerCard}>
        <View style={Styles.block}>
          <TouchableOpacity style={Styles.card} onPress={props.home}>
            <Icon style={Styles.icon} name="home" />
            <Text style={Styles.legend}>Início</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.card} onPress={props.gallery}>
            <Icon style={Styles.icon} name="photo-video" />
            <Text style={Styles.legend}>Galeria</Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.block}>
          <TouchableOpacity style={Styles.card} onPress={props.class}>
            <Icon style={Styles.icon} name="user-graduate" />
            <Text style={Styles.legend}>Turma</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.card} onPress={props.management}>
            <Icon style={Styles.icon} name="chalkboard-teacher" />
            <Text style={Styles.legend}>Gestão</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
