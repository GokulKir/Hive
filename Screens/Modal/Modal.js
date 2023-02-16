import {StyleSheet, View, TouchableOpacity, Dimensions} from 'react-native'
import React, {useState} from 'react'
import {Dialog, Portal, Text} from 'react-native-paper'
const [visible, setVisible] = React.useState(false)
const hideDialog = () => setVisible(false)

export default function Modal ({navigation}) {
  return (
    <View>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Content>
            <Text variant='bodyMedium'>This is simple dialog</Text>
          </Dialog.Content>
        </Dialog>
      </Portal>
    </View>
  )
}

const styles = StyleSheet.create({})
