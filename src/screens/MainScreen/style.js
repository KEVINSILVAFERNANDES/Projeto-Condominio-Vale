import React from 'react';
import { View, Image } from 'react-native';
import styled from 'styled-components/native';

export const Page = styled.SafeAreaView`
    flex: 1;
    background-color: #0BB9E2;
`

export const Container = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;
    padding: 20px;
`
export const Text = styled.Text`
    font-size: 28px;
`

export const Square = styled.TouchableOpacity`
    width: 80px;
    height: 80px;
    background-color: #DFC90A;
    border-radius: 10px;
    margin: 10px;
    align-items: center;
    justify-content: center;
`

export const SquareIconLostFound = () => {
    return(
        <View style = {{alignItems: "center"}}>
            <Image 
                source = {require('./images/icon_Lost_Found.png')}
                style = {{width: 80, height: 80}}
                
            />
        </View>
    );
}

export const SquareIconOcorrencia = () => {
    return(
        <Image 
            source = {require('./images/icon_Ocorrencia.png')}
            style = {{width: 80, height: 80}}
        />
    );
}

export const SquareIconMural = () => {
    return(
        <Image 
            source = {require('./images/icon_Mural.png')}
            style = {{width: 80, height: 80}}
        />
    );
}

export const Logo = () => {
    return(
        <View style = {{alignItems: "center", marginTop: 20}}>
            <Image 
            source = {require('../LoginScreen/images/logo.png')}
            />
        </View>
      
    );
}

export const SquareIconReservation = () => {
    return(
        <Image 
            source = {require('./images/icon_Reservation.png')}
            style = {{width: 80, height: 80}}
        />
    );
}