import Styles from "../style/gallery";
import AppLoading from "expo-app-loading";
import Menu from "../components/menu/menu";
import { StatusBar } from "expo-status-bar";
import { Text, View, Image, ScrollView } from "react-native";
import { Roboto_500Medium } from "@expo-google-fonts/roboto";
import {
  useFonts,
  Nunito_800ExtraBold,
  Nunito_500Medium,
} from "@expo-google-fonts/nunito";

export default Gallery = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    Nunito_500Medium,
    Nunito_800ExtraBold,
    Roboto_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={Styles.container}>
      <View style={Styles.content}>
        <ScrollView style={Styles.containerCard}>
          <View style={Styles.block}>
            <View style={Styles.card}>
              <Image
                style={Styles.photo}
                source={{ uri: "https://i.imgur.com/1ccjSG7.png" }}
              />
            </View>
            <View style={Styles.card}>
              <Image
                style={Styles.photo}
                source={{ uri: "https://i.imgur.com/9R6Bl10.jpg" }}
              />
            </View>
          </View>
          <View style={Styles.block}>
            <View style={Styles.card}>
              <Image
                style={Styles.photo}
                source={{ uri: "https://i.imgur.com/Hkci3WQ.png" }}
              />
            </View>
            <View style={Styles.card}>
              <Image
                style={Styles.photo}
                source={{ uri: "https://i.imgur.com/DSUZF3O.jpg" }}
              />
            </View>
          </View>
          <View style={Styles.block}>
            <View style={Styles.card}>
              <Image
                style={Styles.photo}
                source={{ uri: "https://i.imgur.com/Fscrts4.jpg" }}
              />
            </View>
            <View style={Styles.card}>
              <Image
                style={Styles.photo}
                source={{ uri: "https://i.imgur.com/FDwkPwt.jpg" }}
              />
            </View>
          </View>
          <View style={Styles.block}>
            <View style={Styles.card}>
              <Image
                style={Styles.photo}
                source={{ uri: "https://i.imgur.com/aNnzSRb.jpg" }}
              />
            </View>
            <View style={Styles.card}>
              <Image
                style={Styles.photo}
                source={{ uri: "https://i.imgur.com/YMlrLXN.jpg" }}
              />
            </View>
          </View>

          <View style={Styles.block}>
            <View style={Styles.card} onPress>
              <Image
                style={Styles.photo}
                source={{ uri: "https://i.imgur.com/wY7PRC3.jpg" }}
              />
            </View>
            <View style={Styles.card}>
              <Image
                style={Styles.photo}
                source={{ uri: "https://i.imgur.com/WaMUj30.png" }}
              />
            </View>
          </View>
        </ScrollView>
      </View>
      <Text style={Styles.title}>TRIAS</Text>
      <Menu
        home={() => navigation.navigate("Home")}
        class={() => navigation.navigate("Class")}
        gallery={() => navigation.navigate("Gallery")}
        management={() => navigation.navigate("Management")}
      />
      <StatusBar style="auto" />
    </View>
  );
};
