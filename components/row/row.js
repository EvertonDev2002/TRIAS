import { View } from "react-native";
import Styles from "../../style/row";

export default Row = (props) => {
  return <View style={Styles.block}>{props.children}</View>;
};
