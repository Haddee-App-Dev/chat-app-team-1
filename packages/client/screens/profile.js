import { View, useWindowDimensions, Image, Text, SafeAreaView, StyleSheet, Alert } from 'react-native';
import { ChatScreenHeader } from '../components';
import { signOut, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from 'react';
import { auth } from "../lib/firebase";
import tempChatCover from '../assets/favicon.png';
import { CustomButton } from '../components';

export function SelfProfileScreen({ navigation }) {
    const { height } = useWindowDimensions();
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
            <View styles={styles.profileContainer}>
                <Image source={tempChatCover} style={[styles.logo, { height: height * 0.3 }]} resizeMode="contain" />
                <Text style={styles.text} > Signed in as {user}!</Text>
            </View>
            <CustomButton
                text="Sign Out"
                onPress={() => signOut(auth).then(() => {
                    navigation.navigate('Login');
                }).catch((error) => {
                    Alert.alert("Error", error);
                })}
                bgColor="#E7EAF4"
                fgColor="#3B71F3"
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    logo: {
        width: '60%',
        maxWidth: 100,
        maxHeight: 100,
        backgroundColor: 'white',
        margin: 20,
        alignSelf: 'left'
    },
    profileContainer: {
        backgroundColor: 'white', // Background color for the profile container
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
        margin: 8,
    }
})