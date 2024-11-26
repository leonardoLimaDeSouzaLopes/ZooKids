import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from './src/pages/Home';
import Logar from './src/pages/Logar';
import Cadastrar from './src/pages/Cadastrar';
import PaginaInicial from './src/pages/PaginaInicial';
import Animais from './src/pages/Animais';

export default function App() {

    const Stack = createNativeStackNavigator ();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Logar' component={Logar} />
                <Stack.Screen name='Cadastrar' component={Cadastrar} />
                <Stack.Screen name='PaginaInicial' component={PaginaInicial} />
                <Stack.Screen name='Animais' component={Animais} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}