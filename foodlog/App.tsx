import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import StackNav from './navigator/stackNav'


 const App = () => {


   return (
        <NavigationContainer>
          <StackNav />
        </NavigationContainer>
   );
 };

 export default App;
