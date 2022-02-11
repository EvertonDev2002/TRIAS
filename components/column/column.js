import { View } from "react-native";
import Styles from "../../style/column";

export default Column = (props) => {
  return <View style={Styles.column}>{props.children}</View>;
};
