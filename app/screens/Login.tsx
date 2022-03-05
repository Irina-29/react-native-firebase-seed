import React, { useState } from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { Button, TextInput, Paragraph } from "react-native-paper";

const LoginScreen = ({ navigation }: any) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [hidePassword, setHidePassword] = useState(true);
    const [error, setError] = useState('');

    const inputStyle: StyleProp<ViewStyle> = {
        alignSelf: 'stretch',
        margin: 20
    };

    const changeText = (email: string) => setEmail(email);
    const loginCheck = () => {
        if(email !== "failed") {
            navigation.navigate('Main');
        } 
        else {
            setError("Login Failed");
        }
    };

    return (
        <View style={{ alignSelf: 'stretch', display: 'flex', flexDirection: 'column', height: '50%', marginTop: '30%' }}>
            <TextInput
                mode="outlined"
                style={inputStyle}
                label="Email"
                value={email}
                autoComplete={false}
                onChangeText={changeText}
            />
            <TextInput
                mode="outlined"
                label="Password"
                style={inputStyle}
                secureTextEntry={hidePassword}
                value={password}
                autoComplete={false}
                onChangeText={(password) => setPassword(password)}
                right={<TextInput.Icon name="eye" onPress={() => setHidePassword(!hidePassword)} />}
            />
            <Paragraph>
                {error}
            </Paragraph>
            <Button mode="outlined" style={{ alignSelf: 'center' }}
                onPress={loginCheck}
            >Login</Button>
            <Button mode="outlined" style={{ alignSelf: 'center' }}
                onPress={() => navigation.navigate("Register")}
            >Register</Button>
        </View>
    );
}

export default LoginScreen;