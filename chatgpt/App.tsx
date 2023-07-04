// import React, { useEffect, useState, useRef } from 'react';
// import {
//   Button,
//   SafeAreaView,
//   ScrollView,
//   StyleSheet,
//   View,
//   KeyboardAvoidingView,
//   Platform,
//   TextInput,
//   ScrollViewComponent} from 'react-native';
// import Bubble from './components/Bubble';
// // import {DotsLoader} from 'react-native-indicator';
// import {Configuration, OpenAIApi} from 'openai';

// const configuration = new Configuration({
//   apiKey: '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'
// });

// const openai = new OpenAIApi(configuration);

// const scrollViewRef = useRef<ScrollView | null>(null);

// function App(): JSX.Element {
//   const [input, setInput] = useState('');
//   const [messages, setMessages] = useState<{user: string; text: string}[]>([
//     {user: 'me', text: '안녕하세요'},
//     {user: 'chat', text: '반갑습니다'},
//   ]);
//   const [isLoading, setIsLoading] = useState(true)

//   const requestData = async (text:string) => {
//     try {
//       const completiton = await openai.createCompletion({
//         model: 'text-davinci-003',
//         prompt: text,
//         max_tokens: 1000,
//       });

//       setMessages([
//         ...messages,
//         {
//           user: 'gpt',
//           text: completiton.data.choices[0].text?.replace(/\n/g, '') || '',
//         }
//       ]);
//     } catch (error: any) {
//       if(error.response) {
//         console.log(error.response.status);
//         console.log(error.response.data);
//       }
//       else {
//         console.log(error.message);
//       }      
//     }
//   };

//   const onSend = async () => {
//     setMessages([...messages, {user: 'me', text: input}]);
//   };

//   useEffect(() => {
//     if (isLoading) {
//       setIsLoading(false);
//     }else if(input.length > 0) {
//       setIsLoading(true);
//       requestData(input);
//       setInput('');
//     }
//     scrollViewRef.current?.scrollToEnd();
//   }, [messages]);

//     return (
//         <SafeAreaView style={styles.container}>
//             <ScrollView style={styles.chatbox} ref={scrollViewRef}>
//                 {messages.map(({user, text}, index) => {
//                   return <Bubble key={index} text={text} isMine={user === 'me'} />;
//                 })}
//                 {/* {isLoading && <DotsLoader size={10} color="#68798c" betweenSpace={5} />} */}
//             </ScrollView>
//             <View style={styles.rowbox}>
//               <TextInput
//                 value={input}
//                 style={styles.input}
//                 onChangeText={text => setInput(text)}
//                 placeholder="메시지 입력..."
//               />
//               <Button title="전송" onPress={onSend}/>
//             </View>
//              {/* {Platform.OS === 'android' && <KeyboardAvoidingView behavior="padding" />} */}
//         </SafeAreaView>
//     );
// };

// const styles = StyleSheet.create({
//   container: {flex: 1, backgroundColor: 'white'},
//   chatbox: {flex: 1, backgroundColor: '#aebfd1', padding: 10},
//   rowbox: {
//     flexDirection: 'row',
//     padding: 10,
//   },
//   input: {
//     flex: 1,
//     fontSize: 16,
//   },
// });

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Navigation } from "./screens/navigation/Navigator";

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}
export default App;