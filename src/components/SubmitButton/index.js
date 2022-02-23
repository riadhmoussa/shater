import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import styles from './styles'
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../configs/Colors';

const SubmitButton = (props) => {
    return (
      <View style={styles.button}>
          <TouchableOpacity
            style={styles.signIn}
            >
            <LinearGradient
              colors={[Colors.primary, '#FFB07B']}
              style={styles.signIn}
               start={{ x: 0, y: 1 }}
  end={{ x: 1, y: 1 }}>
              <Text
                style={[
                  styles.textSign,
                  {
                    color: '#fff',
                  },
                ]}>
                {props.title}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
    )
}

export default SubmitButton
