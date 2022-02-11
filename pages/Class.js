import Styles from "../style/class";
import Row from "../components/row/row";
import AppLoading from "expo-app-loading";
import Menu from "../components/menu/menu";
import Card from "../components/card/card";
import { StatusBar } from "expo-status-bar";
import ScrollView from "../components/scrollView/scrollView";
import { Roboto_500Medium } from "@expo-google-fonts/roboto";
import { Text, View, TouchableOpacity } from "react-native";
import {
  useFonts,
  Nunito_800ExtraBold,
  Nunito_500Medium,
} from "@expo-google-fonts/nunito";

export default Class = ({ navigation }) => {
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
        <ScrollView>
          <Row>
            <Card photo={"https://i.imgur.com/Fscrts4.jpg"} legend={"Agenor"} />
            <Card photo={"https://i.imgur.com/Fscrts4.jpg"} legend={"Alan"} />
          </Row>
          <Row>
            <Card
              photo={"https://i.imgur.com/Fscrts4.jpg"}
              legend={"Ana Barbara"}
            />
            <Card
              photo={"https://i.imgur.com/Fscrts4.jpg"}
              legend={"Ana Gabriela"}
            />
          </Row>
          <Row>
            <Card photo={"https://i.imgur.com/Fscrts4.jpg"} legend={"Artur"} />
            <Card
              photo={"https://i.imgur.com/Fscrts4.jpg"}
              legend={"Atilas Luiz"}
            />
          </Row>
          <Row>
            <Card
              photo={"https://i.imgur.com/Fscrts4.jpg"}
              legend={"Cauã William "}
            />
            <Card
              photo={"https://i.imgur.com/Fscrts4.jpg"}
              legend={"Edson Matheus"}
            />
          </Row>
          <Row>
            <Card
              photo={"https://i.imgur.com/Fscrts4.jpg"}
              legend={"Elizieuda"}
            />
            <Card
              photo={"https://i.imgur.com/Fscrts4.jpg"}
              legend={"Éverton"}
            />
          </Row>
          <Row>
            <Card
              photo={"https://i.imgur.com/Fscrts4.jpg"}
              legend={"Francisco"}
            />
            <Card
              photo={"https://i.imgur.com/Fscrts4.jpg"}
              legend={"Geronimo"}
            />
          </Row>
          <Row>
            <Card photo={"https://i.imgur.com/Fscrts4.jpg"} legend={"INGRID"} />
            <Card
              photo={"https://i.imgur.com/Fscrts4.jpg"}
              legend={"Isabela"}
            />
          </Row>
          <Row>
            <Card
              photo={"https://i.imgur.com/Fscrts4.jpg"}
              legend={"Italo José"}
            />
            <Card
              photo={"https://i.imgur.com/Fscrts4.jpg"}
              legend={"Ivoneide"}
            />
          </Row>
          <Row>
            <Card
              photo={"https://i.imgur.com/Fscrts4.jpg"}
              legend={"Jhennify"}
            />
            <Card
              photo={"https://i.imgur.com/Fscrts4.jpg"}
              legend={"João Victor"}
            />
          </Row>
          <Row>
            <Card
              photo={"https://i.imgur.com/Fscrts4.jpg"}
              legend={"João Vinicius"}
            />
            <Card
              photo={"https://i.imgur.com/Fscrts4.jpg"}
              legend={"Jonas Rodrigues"}
            />
          </Row>
          <Row>
            <Card
              photo={"https://i.imgur.com/Fscrts4.jpg"}
              legend={"Jonas Santos"}
            />
            <Card
              photo={"https://i.imgur.com/Fscrts4.jpg"}
              legend={"Jorge Yan"}
            />
          </Row>
          <Row>
            <Card
              photo={"https://i.imgur.com/Fscrts4.jpg"}
              legend={"José Carlos"}
            />
            <Card
              photo={"https://i.imgur.com/Fscrts4.jpg"}
              legend={"José Emanuel"}
            />
          </Row>
          <Row>
            <Card
              photo={"https://i.imgur.com/Fscrts4.jpg"}
              legend={"José Luan"}
            />
            <Card
              photo={"https://i.imgur.com/Fscrts4.jpg"}
              legend={"José Willian"}
            />
          </Row>
          <Row>
            <Card
              photo={"https://i.imgur.com/Fscrts4.jpg"}
              legend={"Lara Kelly"}
            />
            <Card
              photo={"https://i.imgur.com/Fscrts4.jpg"}
              legend={"Larissa Calixto"}
            />
          </Row>
          <Row>
            <Card
              photo={"https://i.imgur.com/Fscrts4.jpg"}
              legend={"Larissa Sobral"}
            />
            <Card
              photo={"https://i.imgur.com/Fscrts4.jpg"}
              legend={"Larissa Maria"}
            />
          </Row>
          <Row>
            <Card photo={"https://i.imgur.com/Fscrts4.jpg"} legend={"Luana"} />
            <Card
              photo={"https://i.imgur.com/Fscrts4.jpg"}
              legend={"Luan Richard"}
            />
          </Row>
          <Row>
            <Card
              photo={"https://i.imgur.com/Fscrts4.jpg"}
              legend={"Ludmila"}
            />
            <Card
              photo={"https://i.imgur.com/Fscrts4.jpg"}
              legend={"Maria Cibele"}
            />
          </Row>
          <Row>
            <Card
              photo={"https://i.imgur.com/Fscrts4.jpg"}
              legend={"Maria Emilly"}
            />
            <Card
              photo={"https://i.imgur.com/Fscrts4.jpg"}
              legend={"Maria Jaqueline"}
            />
          </Row>
          <Row>
            <Card
              photo={"https://i.imgur.com/Fscrts4.jpg"}
              legend={"Mariany"}
            />
            <Card
              photo={"https://i.imgur.com/Fscrts4.jpg"}
              legend={"Ranyele"}
            />
          </Row>
          <Row>
            <Card
              photo={"https://i.imgur.com/Fscrts4.jpg"}
              legend={"Weslley Victor"}
            />
          </Row>
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
