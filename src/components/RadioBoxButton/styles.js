import {StyleSheet} from 'react-native';
import Colors from '../../configs/Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    borderRadius:20,
    elevation:5,
    borderWidth:1,
    borderColor:'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal:hp(3),
    paddingVertical:hp(2.5)
  },
  selectedContainer:{
    backgroundColor: '#FFEBDE',
    borderRadius:20,
    borderWidth:1,
    borderColor: Colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
      paddingHorizontal:hp(3),
    paddingVertical:hp(2.5)
  }
})

export default styles;
