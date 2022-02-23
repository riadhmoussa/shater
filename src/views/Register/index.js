import React from 'react';
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../../components/header';
import styles from './styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import RadioBoxButton from '../../components/RadioBoxButton';
import InputText from '../../components/InputText';
import SubmitButton from '../../components/SubmitButton';
import Colors from '../../configs/Colors';
import PasswordInput from '../../components/PasswordInput';
import person from '../../assets/person.png';
import SelectInput from '../../components/SelectInput';

const RegisterScreen = () => {
  const [WomenGender, setWomenGender] = React.useState(true);
  const [ManGender, setManGender] = React.useState(false);
  const [ChildrenGender, setChildrenGender] = React.useState(false);
  const [Cheked, setChekec] = React.useState(false);
  
  return (
    <ScrollView>
      <Header />
      <View>
        <View style={styles.profileContainer}>
          <TouchableOpacity activeOpacity={0.8} onPress={() => {}} style={{}}>
            <View
              style={{elevation: 2, borderRadius: 100 / 2, overflow: 'hidden'}}>
              <Image
                resizeMode="cover"
                style={{width: 100, height: 100}}
                source={person}
              />
            </View>
          </TouchableOpacity>
          <View
            style={{
              position: 'absolute',
              backgroundColor: 'white',
              borderRadius: 100,
              padding: hp(1.2),
              justifyContent: 'center',
              alignItems: 'center',
              bottom: wp(2),
              left: wp(20),
              backgroundColor: '#E8E8E8',
              borderWidth: 1,
              borderColor: 'white',
            }}>
            <AntDesign name="camerao" color="gray" size={17} />
          </View>
        </View>
        <View style={{paddingHorizontal: wp(8)}}>
          <InputText placeholder="الإسم الكامل" />
          <InputText placeholder="رقم الهاتف" />
          <InputText placeholder="اسم المستخدم (حروف لاتينية)" />
          <SelectInput placeholder="الدولة"/>
          <SelectInput placeholder="المدينة"/>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: hp(1),
            }}>
            <RadioBoxButton
              label="أطفال"
              selected={ChildrenGender}
              customClick={() => {
                setChildrenGender(true);
                setManGender(false);
                setWomenGender(false);
              }}
            />
            <RadioBoxButton
              label="إناث"
              selected={WomenGender}
              customClick={() => {
                setChildrenGender(false);
                setManGender(false);
                setWomenGender(true);
              }}
            />
            <RadioBoxButton
              label="ذكور"
              selected={ManGender}
              customClick={() => {
                setChildrenGender(false);
                setManGender(true);
                setWomenGender(false);
              }}
            />
          </View>

          <PasswordInput placeholder="كلمة المرور" />
          <PasswordInput placeholder="تأكيد كلمة المرور" />

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
              marginVertical: hp(3),
            }}>
            <Text
              style={{
                color: 'black',
                textDecorationLine: 'underline',
                fontSize: 14,
                marginHorizontal: hp(1),
                fontWeight: 'bold',
              }}>
              اوافق على شروط الاستخدام
            </Text>

            <View
              style={[
                {
                  height: 20,
                  width: 20,
                  borderRadius: 10,
                  borderWidth: 2,
                  borderColor: '#000',
                  alignItems: 'center',
                  justifyContent: 'center',
                },
              ]}>
              {Cheked ? (
                <View
                  style={{
                    height: 12,
                    width: 12,
                    borderRadius: 6,
                    backgroundColor: '#000',
                  }}
                />
              ) : null}
            </View>
          </View>

          <SubmitButton title="تسجيل" />
          <View style={{flexDirection: 'row', marginVertical: hp(3)}}>
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
                  سجل الأن
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{flex: 1}}>
              <Text style={{textAlign: 'left', fontSize: 14, marginStart: 5}}>
                لديك حساب ؟
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default RegisterScreen;
