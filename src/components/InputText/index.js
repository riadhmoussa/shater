import React from 'react';
import {Text, TextInput, View} from 'react-native';
import Colors from '../../configs/Colors';
import styles from './styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const InputText = props => {
  const [Show, setShow] = React.useState(false);
  const [text, onChangeText] = React.useState('');
  const [placeholder, setplaceholder] = React.useState(props.placeholder);

  return (
    <View
      style={{
        backgroundColor: '#FFF',
        borderRadius: 20,
        elevation: 2,
        marginVertical: hp(2),
      }}>
      {Show ? (
        <Text
          style={{
            color: Colors.primary,
            fontSize: 12,
            fontWeight: 'bold',
            marginHorizontal: hp(3),
            marginTop: 5,

          }}>
          {props.placeholder}
        </Text>
      ) : null}

      <TextInput
        style={Show?{
          paddingHorizontal: hp(3),
          textAlignVertical: 'center',
          height:40
        }:{
          paddingHorizontal: hp(3),
          textAlignVertical: 'center',
          height:62
        }}
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
  );
};

export default InputText;
