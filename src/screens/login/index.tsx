import { Image, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import Logo from "../../../assets/icon.png";

import Button from "../../components/button";

import styles from "./styles";

export default function Login(): JSX.Element {
  return (
    <>
      <StatusBar style="dark" />

      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.imageWrapper}>
              <Image source={Logo} style={styles.logo} />
          </View>

          <View style={styles.aboutWrapper}>
            <View style={styles.aboutTextWrapper}>
              <Text style={styles.aboutTitle}>Falta pouco pra matar sua fome!</Text>
              <Text style={styles.subTitle}>Como deseja continuar?</Text>
            </View>
            <View style={styles.aboutControllersWrapper}>
              <Button>Continuar com o Facebook</Button>
              <Button type="dark" style={{ marginTop: 8 }}>E-mail</Button>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}
