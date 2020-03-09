import React, {useState} from 'react';
import Lottie from 'lottie-react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import api from '../../services/api';
import Snackbar from 'react-native-snackbar';

import theme from '../../global/theme';

import phone from '../../assets/animations/phone.json';

import {Container, SafeArea, TextApp, MessageError} from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

console.disableYellowBox = true;

export default function Main({navigation}) {
  const [loading, setLoading] = useState(false);

  async function submitDDD({inputDDD}) {
    try {
      setLoading(true);
      const response = await api.get(`${inputDDD}.json`);
      // await setData(response.data);
      navigation.navigate('Result', {
        data: response.data,
        ddd: inputDDD,
      });
    } catch (error) {
      console.log(error, ' ERROR');
      Snackbar.show({
        title: 'Não encontramos esse DDD!',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: theme.colors.error,
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <SafeArea>
      <Container>
        <Lottie sizeMode="contain" source={phone} autoSize autoPlay loop />
        <TextApp>DDDBrasil</TextApp>
        <Formik
          initialValues={{inputDDD: ''}}
          validationSchema={FormSchema}
          onSubmit={values => {
            submitDDD(values);
          }}>
          {({handleSubmit, handleChange, errors}) => (
            <>
              <Input
                icon="cellphone-android"
                placeholder="Informe um DDD"
                onChangeText={handleChange('inputDDD')}
                keyboardType="number-pad"
                autoCorrect={false}
                returnKeyType="send"
                onSubmitEditing={handleSubmit}
              />
              {errors.inputDDD && (
                <MessageError>{errors.inputDDD}</MessageError>
              )}
              <Button
                style={{marginTop: 30}}
                loading={loading}
                onPress={handleSubmit}>
                Procurar
              </Button>
            </>
          )}
        </Formik>
      </Container>
    </SafeArea>
  );
}

const FormSchema = Yup.object().shape({
  inputDDD: Yup.number().required('Por favor, informe um DDD!'),
});
