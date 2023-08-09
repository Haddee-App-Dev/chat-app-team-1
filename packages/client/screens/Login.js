import React, { useState } from "react";
import { View, StyleSheet, Image, useWindowDimensions, ScrollView, Alert } from "react-native";
import { CustomInput, CustomButton } from '../components';
import Logo from "../assets/icon.png";
import { signIn } from "../util/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../lib/firebase";

export const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { height } = useWindowDimensions();

    const handleLogin = async () => {
        //await signIn(email, password);
        //temporary deprecated
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                navigation.navigate('HomeScreen', { screen: 'Chats' });
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                Alert.alert("Error", errorMessage);
                console.log(errorCode);
                console.log(errorMessage);
            });
    }
    const navigateSignUp = () => {
        navigation.navigate('SignUp');
    }

    return (
        <ScrollView showsVerticalScrollIndicato={false}>
            <View style={styles.root}>
                <Image source={Logo} style={[styles.logo, { height: height * 0.3 }]} resizeMode="contain" />
                <CustomInput
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <CustomInput
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <CustomButton
                    text="Sign In"
                    onPress={handleLogin}
                />
                <CustomButton
                    text="Sign In with Google"
                    onPress={handleLogin}
                    bgColor="#E7EAF4"
                    fgColor="#3B71F3"
                />
                <CustomButton
                    text="Don't have an account?"
                    onPress={navigateSignUp}
                    type="TERTIARY"
                />
            </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    root: {
        alignItems: "center",
        padding: 20,
    },
    logo: {
        width: '60%',
        maxWidth: 300,
        maxHeight: 300,
    },
});