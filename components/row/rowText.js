import { View } from "react-native";
import Styles from "../../style/rowText";

export default RowText = (props) => {
  return <View style={Styles.block}>{props.children}</View>;
};
