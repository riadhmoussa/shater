import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
   action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  
    container: {
    backgroundColor: '#FFF',
    borderRadius:20,
    marginTop:25,
     flexDirection: 'row',
  },
})

export default styles;
