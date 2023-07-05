import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import {HeaderTitle} from '../components';
import {styles} from '../theme/appTheme';
import {ScrollView} from 'react-native-gesture-handler';
import {useForm} from '../hooks/useForm';
import {Switch} from 'react-native';

export const TextInputScreen = () => {
  //   const [form, setForm] = useState({
  //     name: '',
  //     email: '',
  //     password: '',
  //   });

  const {email, name, password, isSubscribed, form, onChange} = useForm({
    name: '',
    email: '',
    password: '',
    isSubscribed: false,
  });

  //   const onChangeText = (value: string, name: string) => {
  //     // console.log({text});
  //     setForm({
  //       ...form,
  //       [name]: value,
  //     });
  //   };

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <View style={styles.globalMargin}>
          <HeaderTitle title="TextInputScreen" />
          <TextInput
            value={name}
            onChangeText={value => onChange(value, 'name')}
            placeholder="name"
            keyboardType="default"
            style={stylesInput.input}
            selectionColor={'red'}
          />
          <TextInput
            value={email}
            onChangeText={value => onChange(value, 'email')}
            placeholder="email"
            keyboardType="email-address"
            style={stylesInput.input}
            selectionColor={'red'}
            autoCapitalize="none"
          />

          <TextInput
            value={password}
            onChangeText={value => onChange(value, 'password')}
            placeholder="password"
            keyboardType="default"
            style={stylesInput.input}
            selectionColor={'red'}
            // password
            secureTextEntry
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text>Te suscribes?</Text>
            <Switch
              value={isSubscribed}
              onValueChange={value => onChange(value, 'isSubscribed')}
            />
          </View>
          <Text>{JSON.stringify(form, null, 2)}</Text>
        </View>
        <View style={{height: 100}} />
      </ScrollView>
    </KeyboardAvoidingView>
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
