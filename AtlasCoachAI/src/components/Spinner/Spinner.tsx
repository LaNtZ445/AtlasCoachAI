import { SpinnerContainer, Spinner, SpinAnimation } from "./styles";

const LoadingSpinner = () => {
  return (
    <SpinnerContainer>
      <Spinner />
      <SpinAnimation />
    </SpinnerContainer>
  );
};

export default LoadingSpinner;
