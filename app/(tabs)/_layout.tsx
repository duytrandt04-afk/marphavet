import { rMS, rV } from '@/styles/responsiveStyle';
import { Colors } from '@/theme/colors';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Octicons from '@expo/vector-icons/Octicons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  const iconSize = rMS(25)
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
          height: rV(40),
          paddingHorizontal: rMS(5)
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Entypo size={iconSize} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ color }) => <Octicons size={iconSize} name="search" color={color} />,
        }}
      />
      <Tabs.Screen
        name="video"
        options={{
          title: 'Video',
          tabBarIcon: ({ color }) => <Octicons size={iconSize} name="video" color={color} />,
        }}
      />
      <Tabs.Screen
        name="notification"
        options={{
          title: 'Notification',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons size={iconSize} name="bell" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <FontAwesome size={iconSize} name="user" color={color} />,
        }}
      />
    </Tabs>
  );
}