import React from 'react';
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import MainHeader from '../../components/main_header/index';
import Colors from '../../configs/Colors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import ItemComment from '../../components/ItemComment';
import person from '../../assets/person.png';
import SecondItemPublication from '../../components/SecondItemPublication';

const data = [
  {
    id: 0,
  },
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
];

const PublicationScreen = () => {
  return (
    <View style={{backgroundColor: '#FFF', flex: 1}}>
      <MainHeader title="المنشور" />
      <View
        style={{
          alignSelf: 'center',
          width: '10%',
          height: '1%',
          backgroundColor: Colors.primary,
          borderRadius: 10,
          margin: 10,
        }}></View>
      <View style={{marginHorizontal: hp(1), flex: 1}}>
        <SecondItemPublication />

        <View
  style={{
    borderBottomColor: 'gray',
    borderBottomWidth: 1
    ,marginVertical:hp(2),
  }}
/>

        <FlatList
          contentContainerStyle={{paddingBottom: 100}}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={data}
          style={{marginBottom: '10%'}}
          renderItem={ItemComment}
        />

      </View>
      
        <View
          style={{
            position: 'absolute',
            position: 'absolute',
            bottom: 0,
            height: 60,
            width: '100%',
            flexDirection: 'row',
            backgroundColor: '#EDEEF2',
            elevation:10
          }}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity>
              <Text
                style={{
                  color: Colors.primary,
                  fontWeight: 'bold',
                  fontSize: 20,
                }}>
                نشر
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{flex: 4, justifyContent: 'center', alignItems: 'center'}}>
            <TextInput style={{width: '100%'}} placeholder="أضف تعليق" />
          </View>

          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
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

export default PublicationScreen;
