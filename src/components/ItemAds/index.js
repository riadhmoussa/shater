import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Label from '../Lable';
import Video from 'react-native-video';
import SubmitButton from '../SubmitButton';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Dimensions} from 'react-native';

const ItemAds = () => {
  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
          }}>
          <Text style={{color: 'black', fontWeight: 'bold', fontSize: 18}}>
            العنوان الترويجي للإعلان
          </Text>
          <Text style={{color: 'gray'}}>21h</Text>
          <Label />
          <Label />
          <Label />
        </View>

        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            borderRadius: 10,
            padding: 10,
          }}>
          <Video
            resizeMode={'stretch'}
            source={{
              uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            }}
            style={{
              aspectRatio: 1,
              alignItems: 'center',
              width: '100%',
              borderRadius: 20,
            }}
          />
        </View>
      </View>

      <View style={{flexDirection: 'row', marginBottom: hp(2)}}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            backgroundColor: '#FFF',
            borderRadius: 20,
            elevation: 10,
            marginHorizontal: hp(1),
          }}>
          <TouchableOpacity>
            <SimpleLineIcons name="options-vertical" color="black" size={20} />
          </TouchableOpacity>
        </View>

        <View style={{flex: 5}}>
          <SubmitButton title="التفاصيل" />
        </View>
      </View>
      <View
        style={{
          borderBottomColor: 'gray',
          borderBottomWidth: 1,
          marginBottom: hp(2),
        }}
      />
    </View>
  );
};

export default ItemAds;
