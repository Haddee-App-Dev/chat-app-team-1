
import { createStackNavigator } from '@react-navigation/stack';
import { Login, SignUp } from '../screens';
import { HomeScreen } from './bottom-tab-navigation';

const Stack = createStackNavigator();

//Consider creating separate navigator for signin signout
export function AppNavigation() {



    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
        >

            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
    );
}