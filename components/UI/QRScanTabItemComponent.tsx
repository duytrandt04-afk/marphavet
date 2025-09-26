import React, {PropsWithChildren} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {rMSV} from '@/styles/responsiveStyle';
import { Colors } from '@/theme/colors';

type Props = PropsWithChildren<{
  onPress: () => void;
}>;

const QRScanTabItemComponent = ({onPress}: Props) => {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.backgroundContainer}>
        <Button
            onPress={() => onPress}
            title="Learn More"
            color={Colors.tabItem}
            accessibilityLabel="Learn more about this purple button"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundContainer: {
    borderRadius: rMSV(100),
    backgroundColor: Colors.tabItem,
    padding: rMSV(5),
    bottom: rMSV(20),
    transform: [{translateY: rMSV(-6)}],
  },
  container: {
    width: rMSV(60),
    height: rMSV(60),
    borderRadius: rMSV(100),
  },
});

export default QRScanTabItemComponent;