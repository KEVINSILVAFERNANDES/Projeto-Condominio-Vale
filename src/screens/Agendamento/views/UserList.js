import React, { useContext } from 'react'
import { View, Text, FlatList, Alert } from 'react-native'
import { ListItem, Avatar, Button, Icon } from 'react-native-elements'
import UsersContext from '../context/UsersContext'


export default props => {

    const { state, dispatch } = useContext(UsersContext)
    
    function confirmUserDeletion(user){
        Alert.alert('Excluir Formulario', 'Deseja excluir o Agendamento?', [
            {
                text: 'Sim',
                onPress() {
                    dispatch({
                        type: 'deleteUser',
                        payload: user,
                    })
                }
            },
            {
                text: 'Não'
            }
        ])
    }

    function getUserItem({ item: user }) {
        return (
            <ListItem key={user.id} bottomDivider>
                            
            
            
            <ListItem.Content>
            
            <Text>Local: <ListItem.Title>{user.local}</ListItem.Title></Text>
            <Text>Data: <ListItem.Subtitle>{user.data}</ListItem.Subtitle></Text>
            <Text>Prédio: <ListItem.Title>{user.predio}</ListItem.Title></Text>
            <Text>Apartamento: <ListItem.Subtitle>{user.apartamento}</ListItem.Subtitle></Text> 
            </ListItem.Content>
            <Button
                    onPress={() => props.navigation.navigate('UserForm', user)}
                    
                    type="clear"
                    icon={<Icon name="edit" size={25} color="orange" />}
                />
             <Button
                    onPress={() => confirmUserDeletion(user)}
                    
                    type="clear"
                    icon={<Icon name="delete" size={25} color="red" />}
                />           
            
        </ListItem>
        )
    }

    return (
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={state.users}
                renderItem={getUserItem}
            />
        </View>
    )
}
