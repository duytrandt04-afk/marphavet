import {scale, verticalScale, moderateScale, moderateVerticalScale} from 'react-native-size-matters';

export const rS = (size: number) => {
  return scale(size);
};

export const rV = (size: number) => {
  return verticalScale(size);
};

export const rMS = (size: number, factor: number = 0.5) => {
  return moderateScale(size, factor);
};

export const rMSV = (size: number, factor: number = 0.5) => {
  return moderateVerticalScale(size, factor);
};