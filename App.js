import { NavigationContainer } from '@react-navigation/native';

import AddExpensive  from './screens/AddExpensive';
import RecentExpensive from "./screens/RecentExpensive";
import AllExpensive from "./screens/AllExpensive";
import Ionicons from "react-native-vector-icons/Ionicons";
import Antsign from  "react-native-vector-icons/AntDesign";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();
function Expense(){
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: 'red'},
        headerTintColor: 'white',
        tabBarStyle: { backgroundColor: 'blue' },
        tabBarActiveTintColor: 'yellow',
        headerRight: ({ tintColor }) => (
          <IconButton
            icon="add"
            size={24}
            color={tintColor}
            onPress={() => {
              navigation.navigate('ManageExpense');
            }}
          />
        ),
      })}
    >
      <BottomTabs.Screen
        name="RecentExpenses"
        component={RecentExpensive}
        options={{
          title: 'Recent Expenses',
          tabBarLabel: 'Recent',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="AllExpenses"
        component={AllExpensive}
        options={{
          title: 'All Expenses',
          tabBarLabel: 'All Expenses',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}



function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{
      tabBarStyle:{backgroundColor:'#87cefa'}
    }}>
      <Stack.Screen name="RecentExpensive" component={RecentExpensive}  Options={{
      
      }}/>
      <Stack.Screen name="AllExpensive" component={AllExpensive} options={{
            tabBarIcon:({color,size})=> (
                <Ionicons name = "plus" color={color} size={size}/>
            )
      }}
          />
           <Stack.Screen name="AddExpensive" component={AddExpensive} options={{
            tabBarIcon:({color,size})=> (
                <Ionicons name = "plus" color={color} size={size}/>
            )
      }}
          />
 
    </Stack.Navigator>
    </NavigationContainer>
  );
}

/*const Tab = createBottomTabNavigator();

function my() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={RecentExpensive} />
      <Tab.Screen name="Settings" component={AllExpensive} />
    </Tab.Navigator>
  );
  }*/
export default App
  
