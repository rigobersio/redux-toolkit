import { useSelector } from 'react-redux'; // hook para acceder al estado global y traer lo que interesa

const DataUser = () => {
  const user = useSelector((state) => state.user); // **state** es el estado global y **user** es el nombre que se le coloco al userSlice

  return (
    <header className="text-3xl font-bold underline">
      <h2 className="text-3xl font-bold underline">Datos del usuario en store</h2>
      <ul className="text-3xl font-bold underline">
        <li className="text-3xl font-bold underline">
          Id: {user.id}
        </li>
        <li className="text-3xl font-bold underline">
          Nombre: {user.name}
        </li>
        <li className="text-3xl font-bold underline">
          Nombre de usuario: {user.userName}
        </li>
        <li className="text-3xl font-bold underline">
          Email: {user.email}
        </li>
      </ul>
    </header>
  )
}

export default DataUser;