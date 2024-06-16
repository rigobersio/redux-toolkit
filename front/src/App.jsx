import { useEffect } from "react"; // permite acceder a diferentes estados del ciclo de vida del componente
import { useDispatch } from "react-redux";

import { addUser } from "./redux/userSlice";
import DataUser from "./components/dataUser/DataUser";
import EmailUser from "./components/emailUser/EmailUser";

function App() {
 
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1") // esto es una promesa. cuando la promesa se resuelva se ejecuta el then
      // en esa url hay un json con los datos de un usuario
      .then((response) => response.json())// esto es una promesa. cuando la promesa se resuelva se ejecuta el then
      .then((data) => dispatch(addUser(data))) // data es la respuesta de la promesa con addUser manda el payload al reducer del slice
      .catch((error) => console.log(error))
    }, []);

  return (
    <>
      <div>
        <h2 className="text-3xl font-bold underline">
        Datos del usuario en store
        </h2>
        <DataUser />
        <EmailUser />
      </div>
    </>
  )
}

export default App
