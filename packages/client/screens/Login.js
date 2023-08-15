import React, { useState } from "react";
import { View, StyleSheet, Image, useWindowDimensions, ScrollView } from "react-native";
import { Snackbar } from "react-native-paper";
import { CustomInput, CustomButton } from '../components';
import Logo from "../assets/icon.png";
import { signIn } from "../util/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../lib/firebase";

export const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { height } = useWindowDimensions();

    const [visible, setVisible] = React.useState(false);
    const onToggleSnackBar = () => setVisible(!visible);
    const onDismissSnackBar = () => setVisible(false);
    const errorMessage = "Invalid email or password";
    //Temporary solution, errorMessage in catch block is not working

    const handleLogin = async () => {
        //await signIn(email, password);
        //above is temporary deprecated
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                navigation.navigate('HomeScreen', { screen: 'Chats' });
            })
            .catch((error) => {
                const errorMessage = error.message;
                onToggleSnackBar();
                //Snackbar implementation above
                //Alert.alert("Error", errorMessage); //Alert implementation
            });
    }
    const navigateSignUp = () => {
        navigation.navigate('SignUp');
    }

    return (
        <><ScrollView showsVerticalScrollIndicato={false}>
            <View style={styles.root}>
                <Image source={Logo} style={[styles.logo, { height: height * 0.3 }]} resizeMode="contain" />
                <CustomInput
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                    autoCorrect={false} />
                <CustomInput
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                    autoCapitalize="none"
                    autoCorrect={false} />
                <CustomButton
                    text="Sign In"
                    onPress={handleLogin} />
                <CustomButton
                    text="Sign In with Google"
                    onPress={handleLogin}
                    bgColor="#E7EAF4"
                    fgColor="#3B71F3" />
                <CustomButton
                    text="Don't have an account?"
                    onPress={navigateSignUp}
                    type="TERTIARY" />

            </View>

        </ScrollView><Snackbar
            wrapperStyle={{ bottom: 0 }}
            visible={visible}
            duration={3000}
            onDismiss={onDismissSnackBar}
        >
                {errorMessage}
            </Snackbar></>
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