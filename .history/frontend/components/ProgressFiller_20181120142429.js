import styled from 'styled-components';
const StyledFiller = styled.div`
  background: #1da598;
  height: 100%;
  border-radius: inherit;
  transition: width 0.2s ease-in;
`;
const ProgressBarFiller = props => {
  return <StyledFiller style={{width: `${props.percentage}%`}} />;
};
export default ProgressBarFiller;
