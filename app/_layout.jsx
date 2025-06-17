import { Tabs } from "expo-router";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function RootLayout() {
  return(
      <Tabs screenOptions={{ tabBarActiveTintColor: "#FFFFFF",tabBarInactiveTintColor: "#E8E8E8" ,tabBarStyle: {backgroundColor: "#166088"}}} >
         <Tabs.Screen name="index"
          options={{
              headerShown: true,
              headerStyle: {
                backgroundColor: "#166088",
              },
              headerTitleAlign: "center",
              headerTintColor: "#FFFFFF",
              title: "Top 3 Recipes" ,
              tabBarIcon: ({ color }) => <MaterialIcons size={30} name="restaurant" color={color}/>
              }}
          />
        <Tabs.Screen name="update"
            options={{
                headerShown: true,
                headerStyle: {
                backgroundColor: "#166088",
                },
                title: "Updated Recipes",
                headerTintColor: "#FFFFFF",
                headerTitleAlign: "center",
                tabBarIcon: ({ color }) => <MaterialIcons size={30} name="update" color={color}/>
                }}
            />
        </Tabs>
              );
}
