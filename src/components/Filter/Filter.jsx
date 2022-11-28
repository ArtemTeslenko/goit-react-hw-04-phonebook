import PropTypes from 'prop-types';
import React from 'react';
import { nanoid } from 'nanoid';
import {
  FormLabel,
  FormInput,
} from 'components/ContactForm/ContactForm.styled';
import { Wrapper } from './Filter.styled';

function Filter({ value, changeFilter }) {
  const filterId = nanoid();

  return (
    <Wrapper>
      <FormLabel htmlFor={filterId}>Find contats by name</FormLabel>
      <FormInput
        id={filterId}
        name="filter"
        value={value}
        onChange={changeFilter}
      />
    </Wrapper>
  );
}

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  changeFilter: PropTypes.func,
};
