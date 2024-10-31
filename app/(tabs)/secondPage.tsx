import { View, Text, Image } from 'react-native'
import React from 'react'
import FunBtn from '@/components/FunBtn'
import { useRouter } from 'expo-router'

const secondPage = () => {
    const router = useRouter()
    const Fun2 = () =>{
      router.navigate("/thirdPage")
    }
  return (
    <View style={{padding:20}}>
      <Image source={require("@/assets/images/secondpage.png")} resizeMode='cover' style={{height:250,width:"250px",margin:"auto",marginTop:30, objectFit:"contain" }}/>
      <View style={{display:"flex", flexDirection:"row", justifyContent:"center",alignItems:"center", padding:20, gap:15}}>
      <View style={{height:10,width:10,borderWidth:1,borderRadius:50}}></View>
      <View style={{height:10,width:10,borderWidth:1,borderRadius:50,backgroundColor:"red"}}></View>
      <View style={{height:10,width:10,borderWidth:1,borderRadius:50}}></View>
      </View>
      <Text style={{textAlign:"center", fontSize:30, fontWeight:600}}>Easily Manage Tasks</Text>
      <Text style={{fontSize:18, paddingHorizontal:15, paddingTop:20, paddingBottom:100, textAlign:"center"}}>Take control of your tasks and achieve your goals.</Text>
      <FunBtn title={"Next"} onPress={Fun2}/>
    </View>
  )
}

export default secondPage