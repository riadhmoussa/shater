import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import logo from '../../assets/icon_without_label.png';
import Colors from '../../configs/Colors';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ItemPublication from '../../components/ItemPublication';
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

const HomeScreen = props => {
  return (
    <View style={{padding: '5%', flex: 1, backgroundColor: '#FFF'}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Feather name="settings" color="black" size={25} />
          <MaterialIcons
            style={{paddingHorizontal: 5}}
            name="notifications-none"
            color="black"
            size={30}
          />
          <View
            style={{
              padding: 5,
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              backgroundColor: 'black',
              borderRadius: 10,
            }}>
            <Ionicons name="wallet-outline" color="white" size={30} />
            <Text
              style={{
                color: 'white',
                paddingHorizontal: 5,
                fontWeight: 'bold',
                fontSize: 16,
              }}>
              ---
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{fontWeight: 'bold', fontSize: 20, color: Colors.primary}}>
            شاطر
          </Text>
          <Image
            source={logo}
            resizeMode="stretch"
            style={{height: 40, width: 40}}
          />
        </View>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={{marginTop: '5%'}}
        data={data}
        renderItem={ItemPublication}
      />

      <TouchableOpacity
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          width: 60,
          position: 'absolute',
          bottom: 10,
          left: 10,
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

export default HomeScreen;
