import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Bottom = () => {
  return (
    <View style={styles.container}>
      <View style={styles.btn}>
          <Text>Button</Text>
      </View>
    </View>
  )
}

export default Bottom

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "absolute",
        top: 40,
        
    },

    btn: {
        backgroundColor: "blue",
        height: 40,
        width: 100,
    }
})