import { Text, View } from "react-native";

import Button from "../../components/button";

import styles from "./styles";

export default function Login(): JSX.Element {
  return (
    <View style={styles.container}>

      <View style={styles.content}>
        <View style={styles.imageWrapper}></View>
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
  );
}
