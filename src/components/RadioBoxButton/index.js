import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../../configs/Colors';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const RadioBoxButton = props => {
  return (
    <TouchableOpacity
      style={props.selected ? styles.selectedContainer : styles.container}
      onPress={props.customClick}>
      <Text style={{textAlign: 'center'}}>{props.label}</Text>
      {props.selected ? (
        <AntDesign style={{backgroundColor: Colors.primary,borderRadius: 25 / 2, marginHorizontal: wp(1), }} name="check" color="white"size={25}/>
      ) : (
        <Fontisto style={{marginHorizontal: wp(1)}} name="radio-btn-passive" color="#CCCCCC" size={25} />
      )}
    </TouchableOpacity>
  );
};

export default RadioBoxButton;
