import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationActions  } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const myAction = () => {
    const nav = NavigationActions.navigate({
      //Let's navigate to Main first
      routeName: 'Main',
      // and then go to BookList
      action: NavigationActions.navigate({ routeName: 'BookList' })
    });
    return nav;
  };