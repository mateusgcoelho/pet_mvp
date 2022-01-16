import { useEffect, useState } from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';

import { AntDesign } from '@expo/vector-icons';

import { TutorialData, TutorialDataProps } from '../../utils/TutorialData';
import CirclesSliderShown from '../../components/circlesSliderShown';

import styles from './styles';
import GlobalStyles from '../../styles/GlobalStyles';

export default function Tutorial({ navigation }: any): JSX.Element {
  const [stepIndex, setStepIndex] = useState<number>(0);
  const [stepElement, setStepElement] = useState<TutorialDataProps>(TutorialData[0]);

  useEffect(() => {
    setStepElement(TutorialData[stepIndex]);
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
      
      <SafeAreaView style={{
        ...styles.container,
        ...GlobalStyles.safeAreaView,
      }}>
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
              <AntDesign name="right" size={16} color="#FEFEFE" />
            </TouchableOpacity>

            <CirclesSliderShown data={TutorialData} stepIndex={stepIndex} />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}
