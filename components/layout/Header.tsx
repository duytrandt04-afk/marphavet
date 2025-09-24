import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Platform } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'

const Header = ({ 
  title = "Header", 
  showBackButton = false, 
  onBackPress = () => {}, 
  rightIcon = null,
  onRightPress = () => {},
  backgroundColor = "white",
  textColor = "black"
}) => {
  return (
    <>
      {/* Status Bar */}
      <StatusBar 
        barStyle={backgroundColor === "white" ? "light-content" : "dark-content"} 
        backgroundColor={backgroundColor}
      />
      
      <View style={[styles.headerContainer, { backgroundColor }]}>
        {/* Left Side - Back Button or Spacer */}
        <View style={styles.leftContainer}>
          {showBackButton ? (
            <TouchableOpacity 
              style={styles.iconButton} 
              onPress={onBackPress}
              activeOpacity={0.7}
            >
              <Ionicons 
                name="chevron-back" 
                size={24} 
                color={textColor} 
              />
            </TouchableOpacity>
          ) : (
            <View style={styles.iconButton} />
          )}
        </View>

        {/* Center - Title */}
        <View style={styles.centerContainer}>
          <Text style={[styles.title, { color: textColor }]} numberOfLines={1}>
            {title}
          </Text>
        </View>

        {/* Right Side - Action Button or Spacer */}
        <View style={styles.rightContainer}>
          {rightIcon ? (
            <TouchableOpacity 
              style={styles.iconButton} 
              onPress={onRightPress}
              activeOpacity={0.7}
            >
              <Ionicons 
                name={rightIcon} 
                size={24} 
                color={textColor} 
              />
            </TouchableOpacity>
          ) : (
            <View style={styles.iconButton} />
          )}
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: Platform.OS === 'ios' ? 15 : 24, // Account for status bar
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  leftContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  centerContainer: {
    flex: 2,
    alignItems: 'center',
  },
  rightContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  iconButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
})

export default Header