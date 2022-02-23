import React from 'react'
import { Text, View } from 'react-native'
import Colors from '../../configs/Colors'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';


const Label = () => {
    return (
        <View style={{flexDirection:'row',justifyContent: 'space-between',backgroundColor:'#FFEBDE'
        ,borderRadius:10,padding:5,marginBottom:hp(1)}}>
        
            <Text style={{fontWeight: 'bold',color:Colors.primary,fontSize:16,marginHorizontal:hp(1)}}>04:40:06</Text>
              <Text style={{color:'black',fontSize:16}}>الوقت المتبقي</Text>
        </View>
    )
}

export default Label
