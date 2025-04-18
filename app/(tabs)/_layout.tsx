import React from 'react';
import { Tabs } from "expo-router";
import { TabBar } from '../components/TabBar';

export default function TabLayout() {
  return (
    <Tabs
     tabBar={props => <TabBar {...props} />}
    screenOptions={{headerShown: false}}>
      <Tabs.Screen name='index' options={{
        title: 'Home',
      }} />
      <Tabs.Screen name='explore' options={{
        title: 'Explore',
 
      }} />
      <Tabs.Screen name='notifications' options={{
        title: 'Notification',
      }} />
      <Tabs.Screen name='cart' options={{
        title: 'Cart',
        tabBarBadge: 3,
      }} />
      <Tabs.Screen name='profile' options={{
        title: 'Profile',
      }} />
    </Tabs>
  );
}