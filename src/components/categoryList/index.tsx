import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

import CategoryItem from "../categoryItem";

import styles from "./styles";

export default function CategoryList({ navigation, itemActiveId = "", style, ...props }: any): JSX.Element {
    const [categoryData, setCategoryData] = useState<any>([
            {
                id: "BANNEUM",
                title: "Comida",
                icon: "paw",
            }, 
            {
                id: "BAasdasdasdsaNAA",
                title: "Saúde",
                icon: "medical",
            }, 
        ]);

    return (
        <View style={{...styles.categoryWrapper, ...style}} {...props}>
            <FlatList
              data={categoryData}
              overScrollMode={"never"}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, _) => item.id}
              renderItem={({ item }: any) => <CategoryItem isActive={itemActiveId == item.id} item={item} navigation={navigation} />}
            />
        </View>
    )
}