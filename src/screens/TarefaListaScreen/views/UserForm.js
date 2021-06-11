import React, { useContext, useState } from 'react'
import { StyleSheet, Text, TextInput, View, Picker, Switch } from 'react-native'
import { Button } from 'react-native-elements'
import UsersContext from '../context/UsersContext'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default ({route, navigation}) => {
    const [user, setUser] = useState(route.params ? route.params : {})
    const { dispatch } = useContext(UsersContext)
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    
    return (
        <View style={style.form}>
            <Text>Assunto:</Text>
            <TextInput
                style={style.input} 
                onChangeText={titulo => setUser({...user, titulo })}
                placeholder="Informe o titulo do assunto"
                value={user.titulo}
                
            />
            <Text>Aviso:</Text>
            <TextInput
                style={style2.input2} 
                onChangeText={aviso => setUser({...user, aviso })}
                placeholder="informe o assunto"
                value={user.aviso}
                
            />

            <Text>Aviso do Prédio:</Text>
                        <View style={styless.container}>
                        <Picker
                            
                            style={{ height: 50, width: 150 }}
                            onValueChange={predio => setUser({...user, predio })}
                            onValueChange={predio => setUser({...user, predio })}
                            value={user.predio}
                        >
                            <Picker.Item label="Pádua" value= "Pádua" />
                            <Picker.Item label="Basél" value= "Basél" />
                        </Picker>
                        </View>
                        <Text></Text>

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
            
            <Button
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

const style = StyleSheet.create({
    form: {
        padding: 12
    },
    input: {
        height: 40,
        borderColor: 'grey',
        borderWidth: 1,
        marginBottom: 10,
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
    }
})

const styless = StyleSheet.create({
    container: {
      flex: 1,
      marginTop:20,
      alignItems: "center",
      flexDirection: "row",
    }
  });

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      marginTop:10,
      flexDirection: "row",

    }
  });
