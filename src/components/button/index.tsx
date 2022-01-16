import { TouchableOpacity, Text } from "react-native";

import styles from "./styles";

export default function Button({ style, type = "light", children, ...rest }: any): JSX.Element {
    return (
        <TouchableOpacity {...rest} 
        activeOpacity={.8} 
        style={{
            ...styles.container,
            ...style,
            backgroundColor: type == "light" ? "#5949C1" : "transparent",
            borderWidth: 1,
            borderColor:  type == "light" ? "transparent" : "#DAD6D6",
        }}>
            <Text style={{ 
                ...styles.textButton,
                color: type == "light" ? "#FEFEFE" : "#646464"
            }}>{children}</Text>
        </TouchableOpacity>
    );
}