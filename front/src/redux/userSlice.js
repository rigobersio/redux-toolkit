import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        id: null,
        name: null,
        userName: null,
        email: null
    },
    reducers: {
        addUser: (state, action) => {
            const { id, name, username, email } = action.payload; // esto es lo que llega del payload de la accion que se dispara desde el componente
            state.id = id; // el estado inicial se actualiza. se toma el valor inicial por medio de state y se actualiza con lo que llega del action.payload
            state.name = name;
            state.userName = username;
            state.email = email;
        },
        // acá otro reducer con la única acción de cambiar el email.
        changeEmail: (state, action) => {
            state.email = action.payload // aca solo llegara el email por lo que no es necesario desestructurar

        }

    }

});

export const { addUser, changeEmail } = userSlice.actions;
// userSlice.actions es un objeto con todas las acciones que queremos exportar: es creado por reduxjs/toolkit
// lo que se exporta no son los reducers addUser y changeEmail, sino las acciones de userSlice.actions (tiene el mismo nombre).
export default userSlice.reducer; // este reducer también lo crea reduxjs/toolkit createSlice(...)