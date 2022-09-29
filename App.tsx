import Welcome from './screens/Welcome';
import RootStack from './components/Navigators/RootStack';
// custom font
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

export default function App() {

  let [fontsLoaded] = useFonts({
    "Lato-Bold" : require ("./assets/fonts/Lato-Bold.ttf"),
    "Lato-Regular" : require("./assets/fonts/Lato-Regular.ttf"),
})

if(!fontsLoaded){
  return <AppLoading/>;
}
  return (
    <Welcome/>
  );
}


