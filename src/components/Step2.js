import { Checkbox, FormControlLabel, Typography } from '@material-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useData } from '../DataContext';
import Form from './ui-components/Form';
import { Input } from './ui-components/Input';
import MainLayout from './ui-components/MainLayout';
import PrimaryButton from './ui-components/PrimaryButton';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  email: yup.string().email('Email should have correct format').required('Email is required'),
});

function Step2() {
  const { setValues, data } = useData();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      email: data.email,
      hasPhone: data.hasPhone,
      phoneNumber: data.phoneNumber,
    },
    resolver: yupResolver(schema),
  });

  const hasPhone = watch('hasPhone');

  const onSubmit = inputData => {
    history.push('/result');
    setValues(inputData);
  };

  return (
    <MainLayout>
      <Typography component="h2" variant="h5">
        Step 2
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register('email')}
          type="email"
          id="email"
          label="Email"
          name="email"
          error={!!errors.email}
          helperText={errors?.email?.message}
          required
        />
        <FormControlLabel
          control={
            <Checkbox name="hasPhone" defaultChecked={data.hasPhone} {...register('hasPhone')} color="primary" />
          }
          label="Do you have a phone"
        />

        {hasPhone && (
          <Input
            {...register('phoneNumber')}
            type="tel"
            id="phoneNumber"
            label="Phone Number"
            name="phoneNumber"
            error={!!errors.phoneNumber}
            helperText={errors?.phoneNumber?.message}
            required
          />
        )}
        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </MainLayout>
  );
}

export default Step2;
