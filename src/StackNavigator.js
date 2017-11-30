import React from 'react';
import { 
    View, 
    Text,
    Button,
    StyleSheet,
} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
//import { TabNavigator } from "react-navigation";

class RecentChatsScreen extends React.Component {
    render() {
      return <View style={{alignItems: 'center'}}>
      <Text>List of recent chats</Text>
      <Button
        onPress={() => this.props.navigation.navigate('Chat', { user: 'Lucy' })}
        title="Chat with Lucy"
        />
      </View>
    }
  }
  
  class AllContactsScreen extends React.Component {
    render() {
      return <View style={{alignItems: 'center'}}>
      <Text>List of all contacts</Text>
      <Button
        onPress={() => this.props.navigation.navigate('Chat', { user: 'Claudete' })}
        title="Chat with Claudete"
        />
    </View>
    }
  }

//Antigos
class HomeScreen extends React.Component {
    static navigationOptions = {
      title: 'Welcome',
    };
    render() {
      const { navigate } = this.props.navigation;
      return (
        <View>
          <Text>Hello, Chat App!</Text>
          <Button
            onPress={() => navigate('Chat', { user: 'Claudete' })}
            title="Chat with Claudete"
          />
        </View>
      );
    }
  }

  class ChatScreen extends React.Component {
    // Nav options can be defined as a function of the screen's props:
    static navigationOptions = ({ navigation }) => ({
      title: `Chat with ${navigation.state.params.user}`,
    });
    render() {
      // The screen's current route is passed in to `props.navigation.state`:
      const { params } = this.props.navigation.state;
      return (
        <View>
          <Text>Chat with {params.user}</Text>
        </View>
      );
    }
  }
  

  const MainScreenNavigator = TabNavigator({
    Recent: { screen: RecentChatsScreen },
    All: { screen: AllContactsScreen },
  });

  const SimpleApp = StackNavigator({
    Home: { 
      screen: MainScreenNavigator,
      navigationOptions: {
        title: 'My Chats',
      },
    },
    Chat: { screen: ChatScreen },
  })
  
export default class App extends React.Component {
    render() {
      return <SimpleApp />;
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });