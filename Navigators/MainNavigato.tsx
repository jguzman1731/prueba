import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Welcome from '../screens/Welcome';
import Login from '../screens/Login';
import Registro from '../screens/Registro';
import Perfil from '../screens/Perfil';
import Historia from '../screens/Historia';
import { createDrawerNavigator } from '@react-navigation/drawer';


const Tab = createBottomTabNavigator();

const Stack = createStackNavigator()
function MyStack(){
    return(
     <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name ="Login" component={Login}/>
        <Stack.Screen name ="Registro" component={Registro}/>
        <Stack.Screen name ="Drawer" component={MyDrawer}/>
     </Stack.Navigator>
    )
}

const Drawer = createDrawerNavigator()
function MyDrawer(){
    return(
     <Drawer.Navigator>
        <Drawer.Screen name ="Welcome" component={Welcome}/>
        <Drawer.Screen name ="Perfil" component={Perfil}/>
        <Drawer.Screen name ="Historia" component={Historia}/>
     </Drawer.Navigator>
    )
}

export default function MainNavigator(){
    return(
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
}