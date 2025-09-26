import { FIREBASE_AUTH } from '@/FirebaseConfig'
import { router } from 'expo-router'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { ActivityIndicator, KeyboardAvoidingView, StyleSheet, TextInput, View } from 'react-native'
import CustomButtonComponent from '@/components/UI/CustomButtonComponent';

const login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH;

    const signIn = async () => {
        setLoading(true);
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            console.log(response);
            router.replace("/(tabs)/home");
        } catch (error: any) {
            console.log(error);
            alert('Sign in failed' + error.message);
        } finally {
            setLoading(false);
        }
    }

    const signUp = async () => {
        setLoading(true);
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            console.log(response);
            alert('Check your emails!');
        } catch (error: any) {
            console.log(error);
            alert('Registration failed' + error.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView behavior='padding'>
                <TextInput 
                value={email}
                    style={styles.input} 
                    placeholder='Email' 
                    autoCapitalize='none' 
                    onChangeText={(text) => setEmail(text)} 
                />
                <TextInput 
                value={password}
                    style={styles.input} 
                    placeholder='Password' 
                    autoCapitalize='none' 
                    onChangeText={(text) => setPassword(text)} 
                    secureTextEntry={true}
                />

                {loading ? (
                    <ActivityIndicator size="large" color="#000ff"/> 
                ) : <>
                    <CustomButtonComponent text='Sign In' onPress={signIn} />
                    <CustomButtonComponent text='Sign Up' onPress={signUp} />

                </>}
            </KeyboardAvoidingView>
        </View>
    )
}

export default login

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        flex: 1,
        justifyContent: 'center'
    },
    input: {
        marginVertical: 4,
        height: 50,
        borderWidth: 1,
        borderRadius: 4,
        padding: 10,
        backgroundColor: '#fff'
    }
})