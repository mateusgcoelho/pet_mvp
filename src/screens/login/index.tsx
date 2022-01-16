import { Image, SafeAreaView, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import Logo from "../../../assets/logo.png";

import Button from "../../components/button";

import styles from "./styles";
import GlobalStyles from "../../styles/GlobalStyles";

export default function Login({ navigation }: any): JSX.Element {
  return (
    <>
      <StatusBar backgroundColor="#FEFEFE" style="dark" />

      <SafeAreaView style={{
        ...styles.container,
        ...GlobalStyles.safeAreaView,
      }}>
        <View style={styles.content}>
          <View style={styles.imageWrapper}>
              <Image source={Logo} style={styles.logo} />
          </View>

          <View style={styles.aboutWrapper}>
            <View style={styles.aboutTextWrapper}>
              <Text style={styles.aboutTitle}>
                Falta pouco pra matar sua fome!
              </Text>
              <Text style={styles.subTitle}>
                Como deseja continuar?
              </Text>
            </View>
            <View style={styles.aboutControllersWrapper}>
              <Button
                onPress={() => navigation.navigate("Dashboard")}
              >
                Continuar com o Facebook
              </Button>
              <Button 
                type="dark"
                style={{ marginTop: 8 }}
              >
                E-mail
              </Button>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}
