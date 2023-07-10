import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "../ui/Spinner";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  //1. Load the authenticated user
  const { user, isLoading } = useUser();

  //2. While loading, show a spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner></Spinner>
      </FullPage>
    );

  //3. If there is NO authenticated user, redirect to the /login

  //4. If there is a user, render the app
  return children;
}

export default ProtectedRoute;
