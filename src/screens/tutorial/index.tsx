import { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Coleira from "../../../assets/tutorial/coleira.png";
import Presente from "../../../assets/tutorial/presente.png";
import Peixe from "../../../assets/tutorial/peixe.png";

import StepsController from '../../components/stepsController';

import styles from './styles';

export default function Tutorial() {
  const steps = [
    {
      photo: Coleira,
      title: "Bem-vindo",
      instruction: "Whata fuki is this men aditionla tes more info hiri",
    },
    {
      photo: Peixe,
      title: "Bateu a fome?",
      instruction: "Whata fuki is this men aditionla more info hiri Whata fuki more info hiri",
    },
    {
      photo: Presente,
      title: "Ultimato meu mn",
      instruction: "Whata fuki is this men aditionla tes more info hiri",
    },
  ];

  const [stepIndex, setStepIndex] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.topBar}>
          <TouchableOpacity>
            <Text style={styles.skipButtonText}>PULAR</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.aboutWrapper}>
          <Image source={steps[stepIndex].photo} style={styles.photo} />

          <View style={{ width: "100%", marginTop: 54, }}>
            <Text style={styles.title}>{steps[stepIndex].title}</Text>
            <Text style={styles.paragraph}>{steps[stepIndex].instruction}</Text>
          </View>
        </View>

        <View style={styles.controllersWrapper}>
          <TouchableOpacity style={styles.nextButton} onPress={() => {
            if (stepIndex == 2) {
              setStepIndex(0);
              return;
            }

            setStepIndex(stepIndex + 1);
          }} />

          <StepsController />
        </View>
      </View>
    </SafeAreaView>
  );
}
