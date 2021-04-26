import React, { useState, useEffect } from 'react';
import { Container, Page, Logo, InputLogin, LoginButton, LoginButtonText, RegistrationButton, RegistrationButtonText } from './style';
import { Alert, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default () => {
    const navigation = useNavigation();
    const [password,setPassword] = useState('');
    const [login, setLogin] = useState('');
    const [valueLogin, setValueLogin] = useState('');
    const [valuePassword, setValuePassword] = useState('');
    const [listUsers, setListUsers] = useState('');
    const efetuarLogin = () => {
        if(login == '' || password == ''){
            Alert.alert(
                "Atenção",
                "Por favor, preencha todos os campos para continuar!",
                [{
                    text: "Tudo bem"
                }]
            )
        }else{
            console.log(listUsers);
           if(listUsers.some(user => user.login == login && user.password == password)){
               navigation.navigate('Main');
           }else{
               Alert.alert(
                   "Atenção",
                   "Poxa, parece que você errou seu usuário ou senha! Verifica eles e tenta novamente, tá ? :)",
                   [
                        {
                            text: "Tudo bem"
                        }
                   ]
               );
           }
        }
    }
    const handleRegistrationClick = () => {
        navigation.navigate('Submit');
    }
   const getItems = async () => {
        try {
         const items = await AsyncStorage.getItem('@users');
         console.log('--------------');
         console.log(items);
         setListUsers(JSON.parse(items));
         console.log('--------------');

        } catch (error) {
          alert('Deu algum erro');
        }
      };

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getItems();
            console.log('Atualizando todo mundo');
          });
          return unsubscribe;
    },[navigation])
    return(
            <Page>
                <Logo />
                <Container>
                    <InputLogin 
                        placeholder = "Digite seu usuário"
                        value = {login}
                        onChangeText = {(l) => setLogin(l)}
                        autoCorrect = {false}
                    />
                    <InputLogin
                        placeholder = "Digite sua senha"
                        secureTextEntry = {true}
                        ref={ref => ref && ref.setNativeProps({ style: { fontFamily: 'Arial' } })}
                        value = {password}
                        onChangeText = {(p) => setPassword(p)}
                        autoCorrect = {false}
                     />
                    <LoginButton activeOpacity = {0.8} onPress = {efetuarLogin} done = {login}>
                        <LoginButtonText>Entrar</LoginButtonText>
                    </LoginButton>
                    <RegistrationButton activeOpacity = {0.8} onPress = {handleRegistrationClick}>
                        <RegistrationButtonText>Usuário novo? Clique aqui para se cadastrar :)</RegistrationButtonText>
                    </RegistrationButton>
                </Container>
            </Page>
    );
}
