
import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './bottom-tab-navigation';
import { AuthNavigator } from './auth-navigation';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { NavigationContainer } from '@react-navigation/native';
import { useRecoilState } from 'recoil';
import { userAtom } from '../atoms';

const Stack = createStackNavigator();

export function AppNavigation() {

    const [isAuth, setIsAuth] = useState(false);
    const [user, setUser] = useRecoilState(userAtom);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                setUser({ id: uid });
                console.log('uid', uid);
                setIsAuth(true);
            }
            else {
                setIsAuth(false);
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