import React, { useState, useEffect } from 'react';
import { Container, Page, Input, SubmitButton, SubmitButtonText, HeaderText, BackButton, BackButtonText, LogoImage } from './style';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { v4 as uuidv4 } from 'uuid';

export default () => {
    const [userName, setUserName] = useState('');
    const [cpf, setCpf] = useState('');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [usersList, setUsersList] = useState('');

    const navigation = useNavigation();
    function handleBackButton () {
        navigation.goBack();
    }


    const handleSubmitButton = async () => {
        if(userName == '' || cpf == '' || login == '' || password == ''){
            Alert.alert(
                "Atenção",
                "Por favor, preencha todos os campos para continuar!",
                [
                    {
                        text: "Tudo bem"
                    }
                ]
            )
        }else{
            const newUsersList = [...usersList,{ userName: userName, cpf: cpf, login: login, password: password}];
            setUsersList(newUsersList);
            try {
                await AsyncStorage.setItem('@users',JSON.stringify(newUsersList));
                alert('Usuário cadastrado com sucesso :)')
                const users = await AsyncStorage.getItem('@users');
                console.log(users);
                setUserName('');
                setCpf('');
                setLogin('');
                setPassword('');
            } catch (error) {
                alert('Algo deu errado!')
            }
        }
    }
    const getUsers = async () => {
        try {
         const users = await AsyncStorage.getItem('@users');
         console.log('--------------');
         console.log(users);
         setUsersList(JSON.parse(users));
         console.log('--------------');

        } catch (error) {
          alert('Deu algum erro');
        }
      };

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getUsers();
            console.log('Atualizando todo mundo');
          });
          return unsubscribe;
    },[navigation])
    return(
        <Page>
            <LogoImage />
            <Container>
                <Input 
                    placeholder = "Digite seu nome"
                    value = {userName}
                    onChangeText = {(n) => setUserName(n)}
                />
                <Input 
                    placeholder = "Digite seu cpf"
                    value = {cpf}
                    onChangeText = {(c) => setCpf(c)}
                />
                <Input 
                    placeholder = "Digite seu usuário"
                    value = {login}
                    onChangeText = {(l) => setLogin(l)}
                />
                <Input 
                    placeholder = "Digite sua senha"
                    value = {password}
                    onChangeText = {(p) => setPassword(p)}
                    secureTextEntry = {true}
                    ref={ref => ref && ref.setNativeProps({ style: { fontFamily: 'Arial' } })}
                />
                <SubmitButton activeOpacity = {0.8} onPress = {handleSubmitButton}>
                    <SubmitButtonText>Cadastrar</SubmitButtonText>
                </SubmitButton>
                <BackButton activeOpacity = {0.8} onPress = {handleBackButton}>
                    <BackButtonText>Voltar</BackButtonText>
                </BackButton>
            </Container>
        </Page>
    );
}