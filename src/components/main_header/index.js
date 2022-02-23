import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Colors from '../../configs/Colors';
import Feather from 'react-native-vector-icons/Feather';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const MainHeader = (props) => {
  return (
    <View style={{marginVertical:hp(1)}}>
      <Text style={{textAlign: 'center',fontWeight: 'bold',fontSize:25,color:'black'}}>{props.title}</Text>
         <View
        style={{
          backgroundColor: Colors.primary,
          borderBottomRightRadius: 20,
          borderTopRightRadius: 20,
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal:20,
          paddingVertical:5,
          position: 'absolute',
          top:0, 

        }}>
        <TouchableOpacity
          onPress={() => {
            console.log('Hello regoster');
          }} style={{ alignItems: 'center',
          justifyContent: 'center',alignSelf:'center'}}>
          <Feather name="arrow-left" color="#FFF" size={30} />
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default MainHeader;
