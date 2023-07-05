import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';
import {HeaderTitle} from '../components';
import {styles} from '../theme/appTheme';

export const TextInputScreen = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const onChangeText = (value: string, name: string) => {
    // console.log({text});
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="TextInputScreen" />
      <TextInput
        value={form.name}
        onChangeText={value => onChangeText(value, 'name')}
        placeholder="name"
        keyboardType="default"
        style={stylesInput.input}
        selectionColor={'red'}
      />
      <TextInput
        value={form.email}
        onChangeText={value => onChangeText(value, 'email')}
        placeholder="email"
        keyboardType="email-address"
        style={stylesInput.input}
        selectionColor={'red'}
        autoCapitalize="none"
      />
      <TextInput
        value={form.password}
        onChangeText={value => onChangeText(value, 'password')}
        placeholder="password"
        keyboardType="default"
        style={stylesInput.input}
        selectionColor={'red'}
        // password
        secureTextEntry
      />
      <Text>{JSON.stringify(form, null, 2)}</Text>
    </View>
  );
};

const stylesInput = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    // borderWidth: 1,
    // borderRadius: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    padding: 10,
  },
});
