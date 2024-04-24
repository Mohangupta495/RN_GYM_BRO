import { Platform } from "react-native";
import { fontsStyle } from "../constants";

export const getFontFamily=(key: string) =>{
    switch (key) {
      case fontsStyle.r_100:
        return Platform.select({
          android: fontsStyle.r_300,
          ios: 'Roboto-Light',
        });
      case fontsStyle.r_400:
        return Platform.select({
          android: fontsStyle.r_400,
          ios: 'Roboto-Regular',
        });
      case fontsStyle.r_500:
        return Platform.select({
          android: fontsStyle.r_500,
          ios: 'Roboto',
        });
      case fontsStyle.r_600:
        return Platform.select({
          android: fontsStyle.r_600,
          ios: 'Roboto-SemiBold',
        });
      case fontsStyle.r_700:
        return Platform.select({
          android: fontsStyle.r_700,
          ios: 'Roboto-Bold',
        });
      case fontsStyle.r_800:
        return Platform.select({
          android: fontsStyle.r_800,
          ios: 'Roboto-ExtraBold',
        });
    }
  }