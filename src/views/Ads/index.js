import React from 'react';
import {FlatList, Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import ItemAds from '../../components/ItemAds';
import Colors from '../../configs/Colors';
import styles from './styles';
import plus from '../../assets/plus.png';
import LinearGradient from 'react-native-linear-gradient';

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

const AdsScreen = () => {
  return (
    <View style={{padding: '5%',backgroundColor:'#FFF'}}>
      <Text
        style={{
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 25,
          color: 'black',
          marginTop: '2%',
        }}>
        إعلاناتي
      </Text>
      <View
        style={{
          alignSelf: 'center',
          width: '10%',
          height: '1%',
          backgroundColor: Colors.primary,
          borderRadius: 10,
          margin: 10,
        }}></View>

      <FlatList
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={data}
        style={{marginBottom:'10%'}}
        renderItem={ItemAds}
      />

       <TouchableOpacity
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          width: 60,
          position: 'absolute',
          bottom: 80,
          left: 20,
          height: 60,
          backgroundColor: '#fff',
          borderRadius: 100,
        }}>
        <LinearGradient
          colors={[Colors.primary, '#FFB07B']}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: 60,
            height: 60,
            borderRadius: 100,
          }}>
          <Image
            source={plus}
            resizeMode="stretch"
            style={{height: 40, width: 40}}
          />
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default AdsScreen;
