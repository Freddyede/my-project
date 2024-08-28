import {useContext, useState} from "react";
// import {useNavigate} from "react-router-dom";
import {handleSubmitForm} from "../handler/forms/handleSubmitForm";
import {createUsers} from "../utils/createUsers.tsx";
import {AuthContext} from "../context/AuthContext.tsx";

export default function HomePage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  // const navigate = useNavigate();
  const user = createUsers(email, password);
  const {loginAction}: any = useContext(AuthContext);

  const onSubmit = (event: any) => {
    event.preventDefault();
    handleSubmitForm(user, loginAction);
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="email" placeholder='Email' autoComplete='true' value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder='Password' autoComplete='true' value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type='submit'>Connexion</button>
    </form>
  );
}