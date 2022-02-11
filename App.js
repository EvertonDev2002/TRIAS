import Home from "./pages/Home";
import Class from "./pages/Class";
import Gallery from "./pages/Gallery";
import Management from "./pages/Management"
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
export default Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Class" component={Class} />
        <Stack.Screen name="Gallery" component={Gallery} />
        <Stack.Screen name="Management" component={Management} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
