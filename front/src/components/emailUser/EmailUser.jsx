import { useSelector, useDispatch } from 'react-redux';

import { changeEmail } from '../../redux/userSlice';

const EmailUser = () => {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.user.email);

  const handlerChange = (event) => {
    const newEmail = event.target.value;
    dispatch(changeEmail(newEmail));
  }

  return (
    <div>
      <p>Editar email de {user.name}</p>
      <input type="email" value={email} placeholder="nuevo email" onChange={handlerChange} />
    </div>
  )
}

export default EmailUser;