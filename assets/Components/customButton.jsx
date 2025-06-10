import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { useState} from 'react'

export default function CustomButton({ label, onPress, selected}) {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
          <Text style={[
              {
              fontSize: 15,
              padding: 10,
              margin: 5
              },
          selected == label ? {backgroundColor: "#89CFF0"}: {backgroundColor: "#DDDDDD"}
          ]
          }>{label}</Text>
      </TouchableOpacity>
    </View>
  );
}