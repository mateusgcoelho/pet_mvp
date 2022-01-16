import { Image, Text, View, FlatList } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

import { StatusBar } from "expo-status-bar";

import Logo from "../../../assets/icon.png";

import styles from "./styles";
import CirclesSliderShown from "../../components/circlesSliderShown";

export default function Home() {
  const data = [{
            id: "oi",
            title: "t",
          }, {
            id: "oia",
            title: "t2",
          }, {
            id: "oia2",
            title: "t2",
          }, {
            id: "oia3",
            title: "t2",
          }];

  return (
    <>
      <StatusBar backgroundColor="#FEFEFE" style="dark" />

      <SafeAreaView style={styles.container}>
        <View style={styles.content}>

          <View style={styles.headerWrapper}>
            <Image source={Logo} style={{ width: 100, height: 52 }} />
          </View>

          <View style={styles.welcomeWrapper}>
            <View style={styles.welcomeTextWrapper}>
              <Text style={styles.welcomeUserText}>Hey, João Mateus...</Text>
              <Text style={styles.welcomeText}>O que seu Pet precisa?</Text>
            </View>
          </View>

          <View
            style={styles.advertisingWrapper}
          >
            <FlatList 
              data={data}
              renderItem={(item: any) => (
                <View style={styles.advertisingItem}>
                  <Text>{item.title}</Text>
                </View>
              )}
              horizontal={true}
            />

            <CirclesSliderShown data={data} stepIndex={0} design="dark" />
          </View>


        </View>
      </SafeAreaView>
    </>
  );
}
