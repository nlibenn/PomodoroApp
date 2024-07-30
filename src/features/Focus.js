import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors } from '../utils/colors';
import { RoundedButton} from '../components/RoundedButton';
import { spacing } from '../utils/sizes'

export const Focus = ({addSubject}) => {
  const [subject, setSubject] = useState(null)
  console.log(subject) 
  return (
    <View style={styles.containter}>
      <View style={styles.inputContainer}>
        <TextInput 
        style={styles.textInput}
        onChangeText={setSubject} label="What would you like to focus on?" 
        />
        <View style={styles.button}>
          <RoundedButton title= '+' size ={50} onPress={() => addSubject(subject)} />
        </View> 
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    justifyContent: 'center',
  },
  textInput: {
    flex: 1,
    marginRight: 10,
    marginRight: spacing.sm,
  },
  inputContainer: {
    padding: 25,
    padding: spacing.lg,
    justifyContent: 'top',
    flexDirection: 'row',
  },
});







