import React from 'react';
import { Container, Text, Square, SquareIconLostFound, SquareIconOcorrencia, SquareIconMural, Logo, Page, SquareIconReservation } from './style';
import { useNavigation } from '@react-navigation/native';

export default () => {
    const navigation = useNavigation();
       
    function handleClickOcorrencia2 () {
        navigation.navigate('AchadosPerdidos');
    }
    return(
        <Page>
            <Logo />
            <Container>
                <Square >
                    <SquareIconOcorrencia />
                </Square>
                <Square>
                    <SquareIconMural />
                </Square>
                <Square onPress = {handleClickOcorrencia2}>
                    <SquareIconLostFound />
                </Square>
                <Square>
                    <SquareIconReservation />
                </Square>
            </Container>
        </Page>
    );
}