import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import SubmitButton from '../../components/SubmitButton';
import Colors from '../../configs/Colors';
import InputText from '../../components/InputText';
import PasswordInput from '../../components/PasswordInput';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import logo_chater from '../../assets/logo-chater.png';

const LoginScreen = props => {
  return (
    <ScrollView>
    <View
      style={{
        backgroundColor: '#F0F0F0',
      }}>
      <Image source={logo_chater}  resizeMode="cover"
                style={{width: '100%', height: 200}}/>
      <View style={{flex: 1,}}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 24,
            textAlign: 'center',
          }}>
          تسجيل الدخول
        </Text>
        <View style={{paddingHorizontal: wp(8)}}>
          <InputText placeholder="إسم المستخدم او رقم الهاتف" />
          <PasswordInput placeholder="كلمة المرور" />
            <Text
          style={{
            fontWeight: 'bold',
            fontSize: 14,
            textDecorationLine: 'underline',
            marginBottom: hp(3),
          }}>
          نسيت كلمة المرور؟
        </Text>
        <SubmitButton
          title="دخول"
          customClick={() => {
            console.log('Hello World!!!');
          }}
        />
        <View style={{flexDirection: 'row', marginTop: 30}}>
          <View style={{flex: 1}}>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('RegisterScreen');
                console.log('Hello regoster');
              }}>
              <Text
                style={{
                  textAlign: 'right',
                  color: Colors.primary,
                  fontWeight: 'bold',
                }}>
                انشاء حساب جديد
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 1}}>
            <Text style={{textAlign: 'left', fontSize: 14, marginStart: 5}}>
              لا يوجد لديك حساب ؟
            </Text>
          </View>
        </View>
        </View>

      
      </View>
    </View>
    </ScrollView>
  );
};

export default LoginScreen;
