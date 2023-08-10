import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { CustomInput, CustomButton } from '../../../components';
import { signUp } from "../util/auth.js";
import { useMutation } from "@apollo/client";
import { createNewUserCustomMutation } from "../api";
import { useRecoilState } from "recoil";
import { userAtom } from "../../../atoms";

export const SignUp = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordReEntry, setPasswordReEntry] = useState('');
    const [createNewUser, { error }] = useMutation(createNewUserCustomMutation);

    //SignUp using google ?
    const handleSignUp = async () => {
        const promise = await signUp(username, email, password);
        navigation.navigate('HomeScreen', { screen: 'Chats' });
    }

    const handleCreateNewUser = async () => {
        const id = await signUp(username, email, password);
        createNewUser({
            variables: {
                id: id,
                email: email,
                username: username
            }
        });
    }

    const navigateSignIn = () => {
        navigation.navigate('Login');
    }

    return (
        <ScrollView showsVerticalScrollIndicato={false}>
            <View style={styles.root}>
                <Text style={styles.title}> Create an account </Text>
                <CustomInput
                    placeholder="Username"
                    value={username}
                    onChangeText={setUsername}
                    autoCapitalize="none"
                />
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
                <CustomInput
                    placeholder="Password Re-Entry"
                    value={passwordReEntry}
                    onChangeText={setPasswordReEntry}
                    secureTextEntry={true}
                    autoCapitalize="none"
                />
                <CustomButton
                    text="Sign Up"
                    onPress={handleCreateNewUser}
                />
                <CustomButton
                    text="Sign In with Google"
                    onPress={handleSignUp} //additional sign in w/ google logic required
                    bgColor="#E7EAF4"
                    fgColor="#3B71F3"
                />
                <CustomButton
                    text="Already have an account?"
                    onPress={navigateSignIn}
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
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#3B71F3',
        margin: 10,
    }
});