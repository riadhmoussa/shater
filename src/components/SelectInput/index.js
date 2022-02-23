import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import Colors from '../../configs/Colors';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const SelectInput = props => {
  const [Show, setShow] = React.useState(false);
  const [placeholder, setplaceholder] = React.useState(props.placeholder);
  const [text, onChangeText] = React.useState('');

  return (
    <View
      style={{
        backgroundColor: '#FFF',
        marginBottom: 10,
        borderRadius: 20,
        elevation: 2,
        marginVertical: hp(3),
      }}>
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            marginHorizontal: hp(1),
            alignItems: 'center',
            justifyContent: 'center',
            flex: 0.2,
          }}>
          <TouchableOpacity
            onPress={() => {
              setData(!data);
            }}>
            <Fontisto name="angle-down" color="grey" size={20} />
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'column', flex: 1, height: hp(10)}}>
          {Show ? (
            <Text
              style={{
                color: Colors.primary,
                fontSize: 12,
                fontWeight: 'bold',
                marginHorizontal: hp(3),
              }}>
              {props.placeholder}
            </Text>
          ) : null}

          <TextInput
            style={
              Show
                ? {
                    paddingHorizontal: hp(3),
                    textAlignVertical: 'center',
                    height: 40,
                  }
                : {
                    paddingHorizontal: hp(3),
                    textAlignVertical: 'center',
                    height: 62,
                  }
            }
            underlineColorAndroid="transparent"
            placeholder={placeholder}
            placeholderTextColor="gray"
            keyboardType={props.keyboardType}
            onChangeText={props.onChangeText}
            returnKeyType={props.returnKeyType}
            numberOfLines={props.numberOfLines}
            multiline={props.multiline}
            onSubmitEditing={props.onSubmitEditing}
            blurOnSubmit={false}
            value={props.value}
            onChangeText={onChangeText}
            onBlur={() => {
              console.log('onBlur');
              console.log(text.length);
              if (text.length === 0) {
                console.log(true);
                setShow(false);
                setplaceholder(props.placeholder);
              } else {
                setShow(true);
              }
            }}
            onFocus={() => {
              setplaceholder('');
              setShow(true);
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default SelectInput;
