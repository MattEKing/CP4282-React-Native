import { Text, TouchableOpacity, View } from 'react-native';

export default function CustomButton({ label, onPress, selected}) {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
          <Text style={[
              {
              fontSize: 15,
              padding: 10,
              margin: 5,
              textAlign: "center"
              },
          selected == label ? {backgroundColor: "#C7C2FF"}: {backgroundColor: "#BFBFBF"}
          ]
          }>{label}</Text>
      </TouchableOpacity>
    </View>
  );
}