import { Text, SafeAreaView, StyleSheet, Alert } from 'react-native';
import { ChatScreenHeader } from '../components';
import { signOut, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from 'react';
import { auth } from "../lib/firebase";
import { CustomButton } from '../components';

export function SelfProfileScreen({ navigation }) {
    const user = auth.currentUser.email;
    /*try {
        const user = auth.currentUser.email;
    }
    catch {
        Alert.alert("Error", "Not signed in");
        console.log("Not signed in");
        navigator.navigate('Login');
    } */
    //Line 11 to 17 does not work, when including the try catch block, 'user' is not defined.
    //I intend to use the try catch block to check if the user is signed in, if not, redirect to login screen.
    return (
        <SafeAreaView style={styles.root}>
            <ChatScreenHeader headerTitle="Profile" />
            <Text>Signed In as {user}!</Text>
            <CustomButton
                text="Sign Out"
                onPress={() => signOut(auth).then(() => {
                    navigation.navigate('Login');
                }).catch((error) => {
                    Alert.alert("Error", error);
                })}
            />

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1
    }
})