import React from 'react';
import styled from 'styled-components';
import logo from './images/logo.png';
import { View, Image } from 'react-native';

export const Page = styled.KeyboardAvoidingView`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #0BB9E2;
`

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: center;
    width: 90%;
    padding-bottom: 20px;
`

export const Logo = () => {
    return(
            <View style = {{flex: 1, justifyContent: 'center'}}>
                <Image 
                source = {require('./images/logo.png')}
                />
            </View>
    );
}

export const InputLogin = styled.TextInput`
    width: 90%;
    background-color: #fff;
    border-radius: 7px;
    borderColor: #000000;
    margin-bottom: 15px;
    font-size: 17px;
    color: #222;
    padding: 10px;
`


export const LoginButton = styled.TouchableOpacity`
    width: 90%;
    height: 45px;
    background-color: #FAA006;
    align-items: center;
    justify-content: center;
    border-radius: 7px;
   
`
export const LoginButtonText = styled.Text`
    font-size: 20px;
    color: #fff;
`

export const RegistrationButton = styled.TouchableOpacity`

`
export const RegistrationButtonText = styled.Text`
    margin-top: 10px;
    font-size: 15px;
    color: #030C49;
    
`