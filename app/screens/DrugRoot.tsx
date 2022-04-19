import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DrugsScreen from "./DrugsList";
import DrugDetailScreen from "./DrugPage";
import ItemListScreen from "./ItemList";
import ItemEditScreen from "./ItemEdit";

//https://reactnavigation.org/docs/hello-react-navigation
const ItemStack = createNativeStackNavigator();

const DrugRootScreen = () => {
    return <ItemStack.Navigator>
        <ItemStack.Screen name="DrugList" component={DrugsScreen} options={{ headerShown: false }} />
        <ItemStack.Screen name="DrugDetail" component={DrugDetailScreen} options={{ headerShown: false }} />
        <ItemStack.Screen name="ItemList" component={ItemListScreen} options={{ headerShown: false }} />
        <ItemStack.Screen name="ItemEdit" component={ItemEditScreen} options={{ headerShown: false }} />
    </ItemStack.Navigator>
}

export default DrugRootScreen;