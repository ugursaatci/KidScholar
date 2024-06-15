import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Lessons from './Pages/Lessons';
import Home from './Pages/Home';
import Leaderboard from './Pages/Leaderboard';
import Profile from './Pages/Profile';
import Lecture from './Pages/Lecture';
import Test from './Pages/Test';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login"
      screenOptions=
      {{
      headerShown: false
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Lessons" component={Lessons} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Leaderboard" component={Leaderboard}/>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Lecture" component={Lecture} />
      <Stack.Screen name="Test" component={Test} />



      
      
         
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
