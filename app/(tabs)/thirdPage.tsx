import { View, Text, Image } from 'react-native'
import FunBtn from '@/components/FunBtn'
import React from 'react'
import { useRouter } from 'expo-router'

const thirdPage = () => {
    const router = useRouter()
    const Fun3 = () => {
        router.navigate("/signup")
    }
  return (
    <View style={{padding:20}}>
    <Image source={require("@/assets/images/thirdpage.png")} resizeMode='cover' style={{height:250,width:"250px",margin:"auto",marginTop:30, objectFit:"contain" }}/>
    <View style={{display:"flex", flexDirection:"row", justifyContent:"center",alignItems:"center", padding:20, gap:15}}>
    <View style={{height:10,width:10,borderWidth:1,borderRadius:50}}></View>
    <View style={{height:10,width:10,borderWidth:1,borderRadius:50}}></View>
    <View style={{height:10,width:10,borderWidth:1,borderRadius:50,backgroundColor:"red"}}></View>
    </View>
    <Text style={{textAlign:"center", fontSize:30, fontWeight:600}}>Ready start Your Day</Text>
    <Text style={{fontSize:18, paddingHorizontal:15, paddingTop:20, paddingBottom:100, textAlign:"center"}}>Now you ready to start the day and fun.
    Enjoy your day</Text>
    <FunBtn title={"Next"} onPress={Fun3}/>
  </View>
  )
}

export default thirdPage