import { Colors } from '@/theme/colors';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { rMS } from '../../styles/responsiveStyle';

type Props = {
  Icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onPress: () => void;
};

const BottomTabItemComponent = ({label, Icon, isActive, onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {Icon}
      {label ? (
        <Text style={{
            color: isActive? Colors.tabItem : Colors.tabItem
        }}></Text>
      ) : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: rMS(10),
    gap: rMS(2),
  },
});

export default BottomTabItemComponent;