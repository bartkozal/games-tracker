// @flow
import styled from "styled-components";
import { SPACING_BASE } from "config/ui";

const Form = styled.form`
  margin-bottom: ${({ noDescent }) => (noDescent ? 0 : SPACING_BASE)};
`;

export default Form;
