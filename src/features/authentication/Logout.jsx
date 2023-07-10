import ButtonIcon from "../../ui/ButtonIcon";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { useLogout } from "./useLogout";
import Spinner from "../../ui/Spinner";

function Logout() {
  const { logout, isLoading } = useLogout();
  return (
    <ButtonIcon disabled={isLoading} onClick={logout}>
      {!isLoading ? (
        <HiArrowRightOnRectangle></HiArrowRightOnRectangle>
      ) : (
        <Spinner></Spinner>
      )}
    </ButtonIcon>
  );
}

export default Logout;
