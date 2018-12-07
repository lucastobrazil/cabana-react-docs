import styled from 'styled-components';
import { fontFamily, space } from 'styled-system';
const DocLabel = styled.label`
  color: black;
  ${fontFamily};
  display: block;
  text-align: center;
  font-size: 10px;
  border-radius: 3px;
  border: 1px solid lightgrey;
  text-transform: uppercase;
  ${space};
`;
DocLabel.defaultProps = {
  fontFamily: 'default',
  px: 1,
};
export default DocLabel;
