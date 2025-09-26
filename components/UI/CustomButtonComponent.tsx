import React, {PropsWithChildren} from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

type Props = PropsWithChildren<{
    text: string;
    onPress: () => void;
}>;

const CustomButtonComponent = ({text, onPress} : Props) => {
  return (
    <View>
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text>{text}</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});

export default CustomButtonComponent