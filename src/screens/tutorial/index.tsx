import { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { StatusBar } from 'expo-status-bar';

import { AntDesign } from '@expo/vector-icons';

import { tutorialData, TutorialDataProps } from '../../utils/tutorialData';

import styles from './styles';

export default function Tutorial({ navigation }: any): JSX.Element {
  const [stepIndex, setStepIndex] = useState<number>(0);
  const [stepElement, setStepElement] = useState<TutorialDataProps>(tutorialData[0]);

  useEffect(() => {
    setStepElement(tutorialData[stepIndex]);
  }, [stepIndex]);

  const nextStep = (): void => {
    if (stepIndex == 2) {
      navigation.navigate("Login", {});
      setStepIndex(0);
      return;
    }

    setStepIndex(stepIndex + 1);
  }

  const skipSteps = (): void => {
    navigation.navigate("Login", {});
  }

  return (
    <>
      <StatusBar style="light" />
      
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.topBar}>
            <TouchableOpacity onPress={() => skipSteps()}>
              <Text style={styles.skipButtonText}>
                PULAR
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.aboutWrapper}>
            <Image source={stepElement.photo} style={styles.photo} />

            <View style={{ width: "100%", marginTop: 54, }}>
              <Text style={styles.title}>
                {stepElement.title}
              </Text>
              <Text style={styles.paragraph}>
                {stepElement.instruction}
              </Text>
            </View>
          </View>

          <View style={styles.controllersWrapper}>
            <TouchableOpacity
              activeOpacity={.8}
              style={styles.nextButton}
              onPress={nextStep}
            >
              <AntDesign name="right" size={24} color="#FEFEFE" />
            </TouchableOpacity>

            <View style={styles.stepControllersWrapper}>
              <View style={styles.stepControllersCirclesWrapper}>
                {tutorialData.map((step, index) => (
                  <View
                    key={step.title}
                    style={{
                      ...styles.stepControllersCircle,
                      backgroundColor: index == stepIndex ? "white" : "#503CCF"
                    }}
                  />
                ))}
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}
