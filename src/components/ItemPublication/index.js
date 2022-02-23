import React from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';
import publication_avatar from '../../assets/publication_avatar.jpg';
import styles from './styles';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import land_rover from '../../assets/land_rover.png';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../configs/Colors';

const index = () => {
  return (
    <View style={styles.item}>
      <View
        style={{
          width: '100%',
          height: hp(40),
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
        <ImageBackground
          imageStyle={{borderRadius: 50}}
          resizeMode="stretch"
          source={publication_avatar}
          style={{height: '100%', width: '100%'}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: hp(2),
              flex: 1,
            }}>
            <View style={{marginHorizontal: hp(1)}}>
              <SimpleLineIcons
                name="options-vertical"
                color="white"
                size={20}
              />
            </View>

            <View>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      textTransform: 'uppercase',
                      fontWeight: 'bold',
                      fontSize: 14,
                      color: '#FFF',
                    }}>
                    hello
                  </Text>
                  <Text style={{fontSize: 13, color: '#FFF'}}>
                    Shaker-user-ID
                  </Text>
                </View>

                <View
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 50 / 2,
                    backgroundColor: '#FFF',
                    marginHorizontal: hp(1),
                  }}>
                  <Image
                    source={land_rover}
                    resizeMode="cover"
                    style={{height: 50, width: 50}}
                  />
                </View>
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: hp(1),
              marginHorizontal: hp(1),
            }}>
            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: hp(1),
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View style={{marginHorizontal: hp(1)}}>
                <SimpleLineIcons name="heart" color="white" size={30} />
              </View>
              <View style={{marginHorizontal: hp(1)}}>
                <Ionicons name="chatbox-outline" color="white" size={30} />
              </View>
            </View>

            <View>
              <LinearGradient
                colors={[Colors.primary, '#FFB07B']}
                style={{
                  paddingVertical: hp(1),
                  paddingHorizontal: hp(3),
                  borderRadius: 30,
                }}
                start={{x: 1, y: 0}}
                end={{x: 0, y: 1}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <View>
                    <Ionicons
                      name="share-social-outline"
                      color="white"
                      size={30}
                    />
                  </View>

                  <View style={{marginHorizontal: 10}}>
                    <Text
                      style={{fontWeight: 'bold', fontSize: 20, color: '#FFF'}}>
                      شارك
                    </Text>
                  </View>
                </View>
              </LinearGradient>
            </View>
          </View>
        </ImageBackground>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
        }}>
        <View>
          <Text
            style={{marginHorizontal: hp(1), fontWeight: 'bold', fontSize: 12}}>
            30 تعليق
          </Text>
        </View>
        <Text>|</Text>
        <View style={{marginHorizontal: hp(1)}}>
          <Text
            style={{marginHorizontal: hp(1), fontWeight: 'bold', fontSize: 12}}>
            1520 إعجاب
          </Text>
        </View>
      </View>

      <View
        style={{
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
          flexDirection: 'row',
        }}>
        <Text style={{color: 'black', fontSize: 14}}>
          <Text
            style={{
              color: Colors.primary,
              fontWeight: 'bold',
              fontSize: 16,
              marginHorizontal: hp(1),
            }}>
            الوليد بن عبد الله
          </Text>
          تستخدم في علم اللغويات للإشارة إلى أي فقرة مكتوبة أو منطوقة مع الرغم
          ذلك أنها طويلة أو قصيرة والشرط في هذا الصدد أنها تكون وحدة متكاملة
        </Text>
      </View>
    </View>
  );
};

export default index;
