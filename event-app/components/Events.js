import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const Events = () => {
  return (
    <View>
      <Text style={styles.headerTitle}>Events list</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  headerTitle: {
    alignSelf: 'center',
    color: '#252525',
    fontWeight: 'bold',
    fontSize: 25,
    paddingTop: 0,
    textAlign: 'center'
  }
})

export default Events
