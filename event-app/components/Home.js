import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import Header from './Header'

export default class Home extends React.Component {
  render () {
    return (
      <View>
        <Header />
        <Text style={styles.headerTitle}>Discover events near you</Text>
        <Text style={styles.headerText}>
          Explore new opportunities. Access private and public events. Start or
          join thoughtful discussions
        </Text>
        <View style={styles.buttonContainer}>
          <Button
            title="Add event"
            color="#252525"
            onPress={() => this.props.navigation.navigate('Home')}
          />
          <Button
            title="Explore events"
            color="#EB7936"
            onPress={() => this.props.navigation.navigate('Events')}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonContainer: {
    justifyContent: 'space-around',
    padding: 20
  },
  headerTitle: {
    alignSelf: 'center',
    color: '#252525',
    fontWeight: 'bold',
    fontSize: 25,
    paddingTop: 0,
    textAlign: 'center'
  },
  headerText: {
    fontSize: 16,
    color: '#999297',
    textAlign: 'center',
    alignSelf: 'center',
    maxWidth: '70%',
    marginTop: 10
  }
})
