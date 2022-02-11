import { ScrollView } from "react-native";
import Styles from "../../style/scrollView";

export default ScrollView_ = (props) => {
  return <ScrollView style={Styles.containerCard}>{props.children}</ScrollView>;
};
