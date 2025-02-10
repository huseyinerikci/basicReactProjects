import LoginForm from "./LoginForm";
import { reAuth } from "../../firebase";

const ReAuthModal = ({ close }) => {
  const handleSubmit = async (e, email, password) => {
    e.preventDefault();

    const res = await reAuth(password);
    close();
  };
  return <LoginForm handleSubmit={handleSubmit} noEmail={true} />;
};

export default ReAuthModal;
