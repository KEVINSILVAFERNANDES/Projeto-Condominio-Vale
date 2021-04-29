import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import UserList from './views/UserList'
import UserForm from './views/UserForm'
import { Button, Icon } from 'react-native-elements'
import { UsersProvider } from './context/UsersContext'

const Stack = createStackNavigator()

export default props => {
    return (
        <UsersProvider>
                
        
            <Stack.Navigator
                initialRouteName="UserList"
                screenOptions={screenOptions}>
                <Stack.Screen
                    name="UserList"
                    component={UserList}
                    options={({ navigation }) => {
                        return {
                            title: "Avisos Condomínio",
                            headerRight: () => (
                                <Button
                                    onPress={() => navigation.navigate("UserForm")} 
                                    type="clear"
                                    icon={<Icon name="add" size={29} color="green"/>}
                                />
                            )
                        }
                    }}
                />
                  <Stack.Screen
                    name="UserForm"
                    component={UserForm}
                    options={{
                        title: "Cadastro de Aviso"
                    }}
                />
            </Stack.Navigator>
        
        </UsersProvider>
        
    )
}

const screenOptions = {
    headerStyle: {
        backgroundColor: '#030C49'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold'
    }
}