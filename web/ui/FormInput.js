// @flow
import React from "react";
import Container from "ui/Container";
import { capitalize } from "lodash-es";

type Props = {
  name: string,
  type?: string,
  placeholder?: string,
  label?: string
};

const FormInput = ({
  name,
  type = "text",
  placeholder,
  label = capitalize(name)
}: Props) => (
  <Container direction="column">
    <Container smallDescent>
      <label htmlFor={name}>{label}</label>
    </Container>
    <input name={name} type={type} placeholder={placeholder} />
  </Container>
);

export default FormInput;
