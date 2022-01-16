import AppLoading from "expo-app-loading";

import { useFonts } from "expo-font";

import Routes from "./src/routes";

export default function App() {
  let [fontsLoaded, error] = useFonts({
    "ReadexPro-ExtraLight": require("./assets/fonts/ReadexPro-ExtraLight.ttf"),
    "ReadexPro-Light": require("./assets/fonts/ReadexPro-Light.ttf"),
    "ReadexPro-Medium": require("./assets/fonts/ReadexPro-Medium.ttf"),
    "ReadexPro-Regular": require("./assets/fonts/ReadexPro-Regular.ttf"),
    "ReadexPro-SemiBold": require("./assets/fonts/ReadexPro-SemiBold.ttf"),
    "ReadexPro-Bold": require("./assets/fonts/ReadexPro-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return <Routes />;
  }
}
