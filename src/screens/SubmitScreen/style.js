import React from 'react';
import styled from 'styled-components/native';
import { Image } from 'react-native';

export const LogoImage = () => {
    return(
        <Image 
            source = {require('../LoginScreen/images/logo.png')}
            style = {{width: 270,height: 230,marginTop: 1}}
        />
    );
}

export const HeaderText = styled.Text`
    font-size: 25px;
    text-shadow: 1px 1px 1px #fff;
`


export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: center;
    width: 90%;
    margin-bottom: 150px;
`

export const Page = styled.KeyboardAvoidingView`
    flex: 1;
    background-color: #0BB9E2;
    align-items: center;
    justify-content: center;
`
export const Input = styled.TextInput`
    width: 90%;
    background-color: #fff;
    border-radius: 7px;
    margin-bottom: 15px;
    font-size: 17px;
    color: #222;
    padding: 10px;
`

export const SubmitButton = styled.TouchableOpacity`
    width: 90%;
    height: 40px;
    border-radius: 10px;
    background-color: #FAA006;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 10px;
`

export const SubmitButtonText = styled.Text`
    font-size: 18px;
    color: #fff;
    font-family: "Comics-San";
`

export const BackButton = styled.TouchableOpacity`
    width: 90%;
    height: 40px;
    border-radius: 10px;
    background-color: #FAA006;
    align-items: center;
    justify-content: center;
`

export const BackButtonText = styled.Text`
    font-size: 18px;
    color: #fff;
`