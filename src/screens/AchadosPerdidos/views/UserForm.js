import React, { useContext, useState } from 'react'
import { StyleSheet, Text, TextInput, View, Switch } from 'react-native'
import { Button } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'
import UsersContext from '../context/UsersContext'

export default ({route, navigation}) => {
    const [user, setUser] = useState(route.params ? route.params : {})
    const { dispatch } = useContext(UsersContext)
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View style={style.form}>
            <Text>N° Apartamento:</Text>
            <TextInput
                style={style.input} 
                onChangeText={apartamento => setUser({...user, apartamento })}
                placeholder="Informe o numero do Apartamento"
                value={user.apartamento}
                
            />
            <Text>Descrição do Objeto:</Text>
            <TextInput
                style={style2.input2} 
                onChangeText={descrição => setUser({...user, descrição })}
                placeholder="Descreva o Objeto encontrado"
                value={user.descrição}
                
            />
            <Text>Telefone:</Text>
            <TextInput
                style={style.input} 
                onChangeText={telefone => setUser({...user, telefone })}
                placeholder="Informe o Telefone para Contato"
                value={user.telefone}
                
            />
            <Text>Ativar Notificações</Text>
            <View style={styles.container}>
                          
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                
                />
                 
                </View>
                <Text></Text>


            <Button style={{ color: '#A00'}}
                title="Salvar"
                onPress={() => {
                    dispatch({
                        type: user.id ? 'updateUser' : 'createUser',
                        payload: user,
                    })
                    navigation.goBack()
                }}
            />
            <TouchableOpacity
                style={style.cancelar}
                onPress={() => {
                    navigation.goBack()
                }}>
                    <Text>Cancelar</Text>
            </TouchableOpacity>
        </View>
    )
    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      marginTop:10,
      flexDirection: "row",

    }
  });

const style = StyleSheet.create({
    form: {
        padding: 12
    },
    input: {
        height: 40,
        borderColor: 'grey',
        borderWidth: 1,
        marginBottom: 10,
        borderRadius: 20,
        
        
    },
    cancelar: {
        marginTop:10,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

const style2 = StyleSheet.create({
    form: {
        padding: 12
    },
    input2: {
        height: 100,
        borderColor: 'grey',
        borderWidth: 1,
        marginBottom: 10,
        borderRadius: 20,
    }
})
