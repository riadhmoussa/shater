import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Colors from '../../configs/Colors';

const styles = StyleSheet.create({
  item: {
    width:'100%',
    height:hp(50),
    marginBottom:hp(2),
   
     },
})

export default styles;
