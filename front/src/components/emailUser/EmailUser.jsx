import { useSelector, useDispatch } from 'react-redux';

import { changeEmail } from '../../redux/userSlice';

const EmailUser = () => {

  const dispatch = useDispatch();
  const email = useSelector((state) => state.user.email);
  const name = useSelector((state) => state.user.name);

  const handlerChange = (event) => {
    const newEmail = event.target.value;
    dispatch(changeEmail(newEmail));
  }

  return (
    <div className='mt-5'>
      <p className='mb-4'>Editar email de {name}</p>
      <input className='border border-gray-300 p-2 rounded-md w-64 focus:outline-none focus:border-blue-500' type="email" value={email} placeholder="nuevo email" onChange={handlerChange} />
    </div>
  )
}

export default EmailUser;