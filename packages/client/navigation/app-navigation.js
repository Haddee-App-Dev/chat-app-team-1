
import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './bottom-tab-navigation';
import { AuthNavigator } from './auth-navigation';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export function AppNavigation() {

    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                console.log('uid', uid);
                setIsAuth(true);
            }
            else {
                console.log("User is logged out");
            }
        })
    }, []);

    return (
        <NavigationContainer>
            {isAuth ? <HomeScreen /> : <AuthNavigator />}
        </NavigationContainer>
    );
}