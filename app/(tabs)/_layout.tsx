import FontAwesome from '@expo/vector-icons/FontAwesome';
import Octicons from '@expo/vector-icons/Octicons';
import { Tabs } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';
import { rV, rMS } from '@/styles/responsiveStyle';
import { Colors } from '@/theme/colors';

const size = rMS(27)

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{ 
        tabBarActiveTintColor: Colors.tabItem, 
        headerShown: false, 
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: rV(5)
        },
        tabBarStyle: {
          height: rV(40)
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={size} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="video"
        options={{
          title: 'Video',
          tabBarIcon: ({ color }) => <Octicons size={size} name="video" color={color} />,
        }}
      />
      <Tabs.Screen
        name="marketplace"
        options={{
          title: 'Marketplace',
          tabBarIcon: ({ color }) => <AntDesign size={size} name="shop" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <FontAwesome size={size} name="user" color={color} />,
        }}
      />
    </Tabs>
  );
}