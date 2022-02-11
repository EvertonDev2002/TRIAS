import Styles from "../style/home";
import { Text, View } from "react-native";
import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";
import PanelsHome from "../components/panels/panelsHome";
import { Raleway_500Medium_Italic } from "@expo-google-fonts/raleway";
import {
  useFonts,
  Nunito_800ExtraBold,
  Nunito_500Medium,
} from "@expo-google-fonts/nunito";

export default Home = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    Nunito_500Medium,
    Nunito_800ExtraBold,
    Raleway_500Medium_Italic,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>TRIAS</Text>
      <PanelsHome
        home={() => navigation.navigate("Home")}
        class={() => navigation.navigate("Class")}
        gallery={() => navigation.navigate("Gallery")}
        management={() => navigation.navigate("Management")}
      />
      <StatusBar style="light" />
    </View>
  );
};
