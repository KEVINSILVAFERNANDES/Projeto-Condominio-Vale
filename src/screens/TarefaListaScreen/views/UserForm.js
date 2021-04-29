import React, { useContext, useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { Button } from 'react-native-elements'
import UsersContext from '../context/UsersContext'

export default ({route, navigation}) => {
    const [user, setUser] = useState(route.params ? route.params : {})
    const { dispatch } = useContext(UsersContext)
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
