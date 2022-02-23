import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import person from '../../assets/person.png';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const ItemComment = () => {
  return (
    <View style={{flexDirection: 'column'}}>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          flex: 1,
          marginBottom: hp(1),
        }}>
        <View style={{flex: 1}}>
          <Text style={{color: 'black', fontSize: 14}}>
            <Text
              style={{
                color: 'black',
                fontWeight: 'bold',
                fontSize: 16,
                marginHorizontal: hp(1),
              }}>
              الوليد بن عبد الله
            </Text>
            تستخدم في علم اللغويات للإشارة إلى أي فقرة مكتوبة أو منطوقة مع الرغم
            ذلك أنها طويلة أو قصيرة والشرط في هذا الصدد أنها تكون وحدة متكاملة
          </Text>
            <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
          marginVertical: hp(1)
        }}>
        <View style={{}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#f8d778',
              paddingHorizontal: 20,
              paddingVertical: 2,
              marginHorizontal: hp(2),
              borderRadius: 10,
            }}>
            <Text style={{color: '#C8A84B', fontSize: 14}}>رد</Text>
          </TouchableOpacity>
        </View>

        <View style={{}}>
          <Text style={{color: 'gray', fontSize: 14}}>يوليو 23</Text>
        </View>
      </View>
        </View>
        

        <View
          style={{flex: 0.2, justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 50 / 2,
              overflow: 'hidden',
              backgroundColor: '#FFF',
              marginHorizontal: hp(1),
            }}>
            <Image
              source={person}
              resizeMode="cover"
              style={{height: 50, width: 50}}
            />
          </View>
        </View>
      </View>

    
    </View>
  );
};

export default ItemComment;
