import CustomButtonComponent from '@/components/UI/CustomButtonComponent';
import { FIREBASE_AUTH } from '@/FirebaseConfig';
import { router } from 'expo-router';
import { signOut } from 'firebase/auth';
import React from 'react';

const Profile = () => {
  const logout = async () => {
    try {
      await signOut(FIREBASE_AUTH);
      console.log("User signed out!");
    } catch (error) {
      console.error("Error signing out:", error);
    } finally {
      router.replace("/login");
    }
  };
  return (
    <CustomButtonComponent text='Log out' onPress={logout} />
  )
}

export default Profile