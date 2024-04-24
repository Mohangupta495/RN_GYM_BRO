import { View, Text } from 'react-native'
import React from 'react'
import * as Progress from "react-native-progress"
import { themeTextColor } from '../global/style'
import { height, width } from '../utils'

const Loading = () => {
  return (
    <View className='flex-row justify-center items-center fixed' style={{height:height,width:width}}>
      <Progress.CircleSnail color={themeTextColor} thickness={5} size={60}/>
    </View>
  )
}

export default Loading