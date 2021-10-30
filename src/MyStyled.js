import styled from "styled-components";

const Sample = ({ className }) => {
  return <div className={className}>sample</div>;
};

const StyledSample = styled(Sample)`
  font-size: 2rem;
`;
