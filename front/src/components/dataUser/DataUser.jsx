import { useSelector } from 'react-redux'; // hook para acceder al estado global y traer lo que interesa

const DataUser = () => {
  const user = useSelector((state) => state.user); // **state** es el estado global y **user** es el nombre que se le coloco al userSlice

  return (
    <header className="flex content-center mb">
      <div className='mt-5 p-5 bg-slate-500'>
      <ul className="font-bold">
        <li className="font-bold">
          Id: {user.id}
        </li>
        <li className="font-bold">
          Nombre: {user.name}
        </li>
        <li className="font-bold">
          Nombre de usuario: {user.userName}
        </li>
        <li className="font-bold">
          Email: {user.email}
        </li>
      </ul>
      </div>
    </header>
  )
}

export default DataUser;