import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import { BookDetail } from "./src/screens/";
import { Search } from "./src/screens";
import { Notification } from "./src/screens";
import { ReadingPage } from "./src/screens"
import { ReservationProccess } from "./src/screens"; 
import { Profile } from "./src/screens";
import { AddBook } from "./src/screens";
import { EditBook } from "./src/screens";
import { Books } from "./src/screens";
import Tabs from "./src/navigation/tabs";
import { useFonts } from 'expo-font';

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: "transparent"
    }
}

const Stack = createStackNavigator();

const App = () => {
    const [loaded] = useFonts({
            "Roboto-Black" : require('./assets/fonts/Roboto-Black.ttf'),
            "Roboto-Bold" : require('./assets/fonts/Roboto-Bold.ttf'),
            "Roboto-Regular" : require('./assets/fonts/Roboto-Regular.ttf'),
        })

    if(!loaded){
        return null;
    }
    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'Home'}
            >
                {/* Tabs */}
                <Stack.Screen name="Home" component={Tabs} />

                {/* Screens */}
                <Stack.Screen name="BookDetail" component={BookDetail} options={{ headerShown: false }} />
                <Stack.Screen name="Search" component={Search} options={{ headerShown: false }} />
                <Stack.Screen name="Notification" component={Notification} options={{ headerShown: false }} />
                <Stack.Screen name="ReadingPage" component={ReadingPage} options={{ headerShown: false }} />
                <Stack.Screen name="ReservationProccess" component={ReservationProccess} options={{ headerShown: false }} />
                <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
                <Stack.Screen name="AddBook" component={AddBook} options={{ headerShown: false }} />
                <Stack.Screen name="EditBook" component={EditBook} options={{ headerShown: false }} />
                <Stack.Screen name="Books" component={Books} options={{ headerShown: false }} />
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;