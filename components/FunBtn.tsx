import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const FunBtn = ({ title, onPress }) => {
  return (
    <View>
      <TouchableOpacity
      style={{paddingHorizontal:25,paddingVertical:15, backgroundColor:"#7400CF", borderRadius:10, width:"100%"}}
      onPress={onPress}>
        <Text style={{color:"white", textAlign:"center", fontSize:20}}>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default FunBtn