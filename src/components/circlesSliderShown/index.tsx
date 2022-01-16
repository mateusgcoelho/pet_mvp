import { View } from "react-native";

import styles from "./styles";

export default function CirclesSliderShown({ data, stepIndex, design = "light" }: any): JSX.Element {
    return (
        <View style={styles.stepControllersWrapper}>
            <View style={styles.stepControllersCirclesWrapper}>
                {data.map((step: any, index: any) => (
                    <>
                        {design == "light" ? (
                            <View
                                key={step.id}
                                style={{
                                    ...styles.stepControllersCircle,
                                    backgroundColor: index == stepIndex ? "#FEFEFE" : "#503CCF"
                                }}
                            />
                        ) : (
                            <View
                                key={step.id}
                                style={{
                                    ...styles.stepControllersCircle,
                                    backgroundColor: index == stepIndex ? "#FFBE33" : "#F2F2F2"
                                }}
                            />
                        )}
                    </>
                ))}
            </View>
        </View>
    );
}