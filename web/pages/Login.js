// @flow
import React, { Fragment } from "react";
import Form from "ui/Form";
import FormInput from "ui/FormInput";
import Container from "ui/Container";
import Button from "ui/Button";

const LoginPage = () => (
  <Fragment>
    <Form>
      <Container direction="column">
        <FormInput name="email" label="E-mail" />
        <FormInput name="password" label="Password" type="password" />
      </Container>

      <Container alignItems="center">
        <Button type="submit">Log In</Button>
        <small>Account will be created if you don't have it.</small>
      </Container>
    </Form>
  </Fragment>
);

export default LoginPage;
