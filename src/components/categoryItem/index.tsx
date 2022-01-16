import { useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

import styles from "./styles";

export default function CategoryItem({ isActive, navigation, item }: any): JSX.Element {
    return (
        <TouchableOpacity 
            style={styles.categoryItemWrapper}
            onPress={() => 
                navigation.navigate("Category", 
                    { 
                        categoryId: item.id,
                        categoryName: item.title,
                        itemActiveId: item.id,
                    }
                )
            }
        >
            <View style={{
                ...styles.categoryItem,
                backgroundColor: isActive ? "#5949C1" : "#F1F1F1"
            }}>
                <Ionicons name={item.icon} size={40} color={isActive ? "#F1F1F1" : "#575757"} />
            </View>
            <Text style={{
                ...styles.categoryItemText,
                color: isActive ? "#575757" : "#C1C1C1",
            }}>{item.title}</Text>
        </TouchableOpacity>
    );
}
