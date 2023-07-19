import React, { useState } from "react";
import { View, StyleSheet, Image, useWindowDimensions, ScrollView } from "react-native";
import CustomInput from "../components/customInput";
import CustomButton from "../components/customButton";
import Logo from "../assets/icon.png";

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { height } = useWindowDimensions();

    const handleLogin = () => {
        //additional login logic required
        navigation.navigate('HomeScreen', { screen: 'Chats' });
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
                />
                <CustomInput
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                    autoCapitalize="none"
                />
                <CustomButton
                    text="Sign In"
                    onPress={handleLogin}
                />
                <CustomButton
                    text="Sign In with Google"
                    onPress={handleLogin} //additional sign in w/ google logic required
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
export default Login