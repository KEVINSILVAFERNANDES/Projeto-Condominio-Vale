import React, { useContext, useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { Button } from 'react-native-elements'
import UsersContext from '../context/UsersContext'

export default ({route, navigation}) => {
    const [user, setUser] = useState(route.params ? route.params : {})
    const { dispatch } = useContext(UsersContext)
    return (
        <View style={style.form}>
            <Text>Local:</Text>
            <TextInput
                style={style.input} 
                onChangeText={local => setUser({...user, local })}
                placeholder="Informe o local de agendamento"
                value={user.local}
                
            />
            <Text>Data:</Text>
            <TextInput
                style={style2.input2} 
                onChangeText={data => setUser({...user, data })}
                placeholder="Informe a data"
                value={user.data}
                
            />
            <Text>N° apartamento:</Text>
            <TextInput
                style={style.input} 
                onChangeText={apartamento => setUser({...user, apartamento })}
                placeholder="Informe o n° do apartamento"
                value={user.apartamento}
                
            />
            <Button
                title="Agendar"
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
        height: 40,
        borderColor: 'grey',
        borderWidth: 1,
        marginBottom: 10,
    }
})
