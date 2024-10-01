import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from './src/pages/Home';
import Entrar from './src/pages/Entrar';
import PaginaInicial from './src/pages/PaginaInicial';

export default function App() {

    const Stack = createNativeStackNavigator ();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Entrar' component={Entrar} />
                <Stack.Screen name='PaginaInicial' component={PaginaInicial} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}