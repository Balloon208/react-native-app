import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import{
    Pressable,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    Button,
    Modal,
    View
} from 'react-native';
import { Navigation } from './navigation/Navigator';

const HomeScreen: React.FC<{
    navigation: NativeStackNavigationProp<any>;
}> = ({navigation}) => {
    const movePage = (route: string) => {
        navigation.navigate(route);
    };

    const [visible, setVisible] = React.useState(false);

    return(
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollview}>
                <Text style={styles.title}>샌즈 AI</Text>
                <Pressable
                    style={[styles.menu, styles.carret]}
                    onPress={() => {
                        movePage('당근');
                    }}>
                    <Text style={styles.menuText}>당근마켓 망해라</Text>
                </Pressable>
                <Pressable
                    style={[styles.menu, styles.youtube]}
                    onPress={() => {
                        movePage('유튜브');
                    }}>
                    <Text style={styles.menuText}>유튜브 채널 추천</Text>
                </Pressable>
                <Pressable
                    style={styles.menu}
                    onPress={() => {
                        movePage('채팅');
                    }}>
                    <Text style={styles.menuText}>자유 채팅</Text>
                </Pressable>
                <Button
                color={'#343434'}
                title='개발자를 알려줘'
                onPress={() => {
                    setVisible(true);
                }}/>
                <Modal
                    transparent
                    style={{backgroundColor: 'red'}}
                    visible={visible}
                    animationType="slide"
                    presentationStyle={'formSheet'}>
                    <View
                        style={{
                            flex:1,
                            justifyContent: 'center',
                            alignItems:'center',
                            marginBottom: 100,
                            backgroundColor: '#00000050'
                        }}>
                        <View
                            style={{
                            justifyContent: 'center',
                            alignItems:'center',
                            height: 100,
                            width: 200,
                            backgroundColor: 'white',
                            borderRadius: 4,
                            padding: 10,
                        }}>
                            <Text style={styles.modalText}>이몸 등장</Text>
                            <Pressable
                                onPress={() => {
                                    setVisible(false);
                                }}>
                                <Text>닫기</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
            </ScrollView>
        </SafeAreaView>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {flex: 1, backgroundColor: 'white'},
    scrollview: {flex: 1, backgroundColor: 'white', padding: 20},
    title: {
        fontWeight: 'bold',
        fontSize: 80,
        marginTop: 30,
        color: 'black',
        marginBottom: 30,
    },
    menu: {
        height: 100,
        width: 300,
        backgroundColor: '#aaaaaa',
        marginHorizontal: 'auto',
        marginVertical: 10,
    },
    menuText: {
        textAlign: 'center',
        lineHeight: 100,
    },
    modalText:{
        fontWeight: 'bold',
        fontSize: 30,
        color: '#000000'
    },
    carret: {
        backgroundColor: '#ff9f00',
    },
    youtube: {
        backgroundColor: '#ff0000',
    },
})