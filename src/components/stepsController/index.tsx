import { Text, View } from 'react-native';

import styles from './styles';

export default function StepsController() {
  return (
    <View style={styles.container}>
      <View style={styles.circlesWrapper}>
        <View style={{
          ...styles.circle,
          backgroundColor: "white"
        }}></View>
        <View style={styles.circle}></View>
        <View style={styles.circle}></View>
      </View>
    </View>
  );
}
