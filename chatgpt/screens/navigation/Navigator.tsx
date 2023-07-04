import React, {Component, ReactElement} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CarretScreen from '../CarretScreen';
import ChatScreen from '../ChatScreen';
import YoutubeScreen from '../YoutubeScreen';
import HomeScreen from '../HomeScreen';

const Stack = createNativeStackNavigator();

export function Navigation(): ReactElement {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="홈">
            <Stack.Screen name="홈" component={HomeScreen} />
            <Stack.Screen name="당근" component={CarretScreen} />
            <Stack.Screen name="유튜브" component={YoutubeScreen} />
            <Stack.Screen name="채팅" component={ChatScreen} />
        </Stack.Navigator>
    );
}