import React, { useEffect, useState } from "react";
import MainLayout from "./Layout";
import { Appbar, Avatar, Button, Divider, List, Paragraph } from "react-native-paper";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AsyncStorage, TouchableOpacity } from "react-native";
import EditProfile from "./EditProfile";
import MyOrdersScreen from "./MyOrders";
import SettingsForApp from "./Settings";
const ProfileStack = createNativeStackNavigator();
const ProfileScreen = ({ navigation }: any) => {
    const [user, setUser] = useState<{ name: string, email: string }>();

    useEffect(() => {
        const fetchUser = async () => {
            const storedUser = await AsyncStorage.getItem('@user');
            if (!!storedUser) {
                setUser(JSON.parse(storedUser));
            }
        }
        fetchUser();
    }, [])
    return (
        <MainLayout>
            <Appbar.Header style={{ backgroundColor: '#64b5f6' }}>
                <TouchableOpacity style={{ marginBottom: '6%', marginLeft: '2%' }} onPress={() => navigation.navigate("Profile")}>
                    <Avatar.Image size={65} source={require('./assets/avatar.png')} />
                </TouchableOpacity>
                <Appbar.Content color={'white'} style={{ marginBottom: '6%', marginLeft: '2%' }} title={`Hello, ${user?.name || user?.email}!`} />
            </Appbar.Header>
            <Button icon="cart" mode="outlined" onPress={() => navigation.navigate('MyOrders')}>
                My orders
            </Button>
            <Divider />
            <Button icon="logout" mode="outlined" onPress={() => navigation.navigate('Login')}>
                Log out
            </Button>
        </MainLayout>
    );
}

export default ProfileScreen;