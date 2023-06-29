
import { Stack, useRouter } from 'expo-router';
import {SafeAreaView, Text } from 'react-native';
import LeftBtn from '../components/LeftBtn';

const Home = () =>{
    const router = useRouter();

    return (
        <SafeAreaView>
            <Text>Home</Text>
            <Stack.Screen options={{ 
                headerStyle:{backgroundColor:'#ffffff'},
                headerShadowVisible:false,
                headerLeft: ()=>(
                    <LeftBtn/>
                )
             }} />
        </SafeAreaView>
    );
}

export default Home;

