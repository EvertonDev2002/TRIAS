import Styles from "../style/management";
import AppLoading from "expo-app-loading";
import { Text, View } from "react-native";
import Menu from "../components/menu/menu";
import { StatusBar } from "expo-status-bar";
import RowText from "../components/row/rowText";
import Column from "../components/column/column";
import CardOne from "../components/card/cardOne";
import CardText from "../components/card/cardText";
import ScrollView from "../components/scrollView/scrollView";
import { Roboto_500Medium, Roboto_900Black } from "@expo-google-fonts/roboto";
import {
  useFonts,
  Nunito_800ExtraBold,
  Nunito_500Medium,
} from "@expo-google-fonts/nunito";

export default Management = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    Roboto_900Black,
    Nunito_500Medium,
    Roboto_500Medium,
    Nunito_800ExtraBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={Styles.container}>
      <View style={Styles.content}>
        <ScrollView>
          <RowText>
            <Text style={Styles.textNumber}>1° ano</Text>
            <Column>
              <CardOne
                photo={"https://i.imgur.com/9R6Bl10.jpg"}
                legend={"Jhennify Damily"}
              />
              <CardText
                leader={"Jhennify Damily"}
                viceLeader={"Elizieuda França"}
                secretary={"Luís Eduardo"}
                director={"Jardel"}
              />
            </Column>
          </RowText>
          <RowText>
            <Text style={Styles.textNumber}>2° ano</Text>
            <Column>
              <CardOne
                photo={"https://i.imgur.com/1ccjSG7.png"}
                legend={"Alan Martins"}
              />
              <CardText
                leader={"Alan Martins"}
                viceLeader={"Elizieuda França"}
                secretary={"Jonas Santos"}
                director={"Cristina"}
              />
            </Column>
          </RowText>
          <RowText>
            <Text style={Styles.textNumber}>3° ano</Text>
            <Column>
              <CardOne
                photo={"https://i.imgur.com/YMlrLXN.jpg"}
                legend={"Éverton"}
              />
              <CardText
                leader={"Éverton"}
                viceLeader={"Elizieuda França"}
                secretary={"Larissa Calixto"}
                director={"Maíra"}
              />
            </Column>
          </RowText>
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
