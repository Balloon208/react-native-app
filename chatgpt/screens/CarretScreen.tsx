import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import{
    Pressable,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    View,
    Text,
} from 'react-native';
import { Navigation } from './navigation/Navigator';

const CarretScreen: React.FC<{
    navigation: NativeStackNavigationProp<any>;
}> = ({navigation}) => {
    const backText = '<';

    return(
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollview}>
                <View style={{
                    flexDirection:'row',
                    alignItems: 'center',
                }}>
                    <Pressable
                    style={{height: 20, width: 20}}
                    onPress={() => {
                        navigation.goBack();
                    }}>
                        <Text style={{fontSize: 20}}>{backText}</Text>
                    </Pressable>
                    <Text style={styles.title}>당근~</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default CarretScreen;

const styles = StyleSheet.create({
    container: {flex: 1, backgroundColor: 'white'},
    scrollview: {flex: 1, backgroundColor: 'white', padding: 20},
    title: {
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: 30,
        color: 'black',
        marginBottom: 30,
    },
})