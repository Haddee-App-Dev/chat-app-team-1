import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView, Alert } from "react-native";
import { CustomInput, CustomButton } from '../components';
import { Snackbar } from "react-native-paper";
import { signUp } from "../util/auth.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../lib/firebase";

export const SignUp = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordReEntry, setPasswordReEntry] = useState('');

    const [visible, setVisible] = React.useState(false);
    const onToggleSnackBar = () => setVisible(!visible);
    const onDismissSnackBar = () => setVisible(false);
    const errorMessage = "Invalid email or password";
    //Temporary solution, errorMessage in catch block is not working

    const handleSignUp = async () => {
        //await signUp(email, password);
        //temporary deprecated
        if (password == passwordReEntry) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed Up
                    const user = userCredential.user;
                    navigation.navigate('HomeScreen', { screen: 'Chats' });
                })

                .catch((error) => {
                    const errorMessage = error.message;
                    onToggleSnackBar();
                });
        }
        else {
            onToggleSnackBar();
        }
    }

    const navigateSignIn = () => {
        navigation.navigate('Login');
    }
    return (
        <><ScrollView showsVerticalScrollIndicato={false}>
            <View style={styles.root}>
                <Text style={styles.title}> Create an account </Text>
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
                <CustomInput
                    placeholder="Password Re-Entry"
                    value={passwordReEntry}
                    onChangeText={setPasswordReEntry}
                    secureTextEntry={true}
                    autoCapitalize="none"
                    autoCorrect={false} />
                <CustomButton
                    text="Sign Up"
                    onPress={handleSignUp} />
                <CustomButton
                    text="Sign Up with Google"
                    onPress={handleSignUp} //additional sign in w/ google logic required
                    bgColor="#E7EAF4"
                    fgColor="#3B71F3" />
                <CustomButton
                    text="Already have an account?"
                    onPress={navigateSignIn}
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
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#3B71F3',
        margin: 10,
    }
});