import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import logo from '../../assets/icon.png';
import Feather from 'react-native-vector-icons/Feather';
import Colors from '../../configs/Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Header = () => {
  return (
    <View
      style={[
        {
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
        },
      ]}>
      <View
        style={{
          flex: 0.2,
          backgroundColor: Colors.primary,
          borderBottomRightRadius: 30,
          borderTopRightRadius: 30,
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal:hp(1)
        }}>
        <TouchableOpacity
          onPress={() => {
            console.log('Hello regoster');
          }}>
          <Feather name="arrow-left" color="#FFF" size={30} />
        </TouchableOpacity>
      </View>

      <View style={{flex: 0.2, alignItems: 'center', justifyContent: 'center'}}>
        <Image
          source={logo}
          resizeMode="stretch"
          style={{height: 60, width: 40}}
        />
      </View>
    </View>
  );
};

export default Header;
