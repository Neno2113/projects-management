import { useContext } from "react";
import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../context";


export const useLogin = () => {
    
    const { doLogin } = useContext(AuthContext);

    const { form, onChange, username, password, isPasswordValid, isUserNameValid, formErrors, formValid, setState } = useForm({ 
        username: '',
        password: '',
        formErrors: { username: '', password: ''},
        isUserNameValid: true,
        isPasswordValid: true,
        formValid: false,

    })

    const onLoginClick = () => {
        if( !validateForm() ) return;

        doLogin( username, password);
        
    }

    //Validacion de formulario en base al state creado arriba
    const validateForm = () => {
        //Valida que el username no este vacio
        if(username.trim().length === 0){
            setState({
                ...form,
                isUserNameValid: false,
                formErrors: { username: 'Usuario es requerido.', password: ''},
                formValid: false
            })
            return false;
            
        } else if(password.trim().length === 0 || password.length < 6 ){
            setState({
                ...form,
                isPasswordValid: false,
                formErrors: { username:'', password: 'La contraseña debe tener mas de 6 caracteres'},
                formValid: false
            })
            return false;
        }
       

        setState({
            ...form,
            isPasswordValid: true,
            isUserNameValid: true,
            formValid: true
        })
        return true;
    }

    return  {
        onChange,
        isPasswordValid,
        isUserNameValid,
        formErrors,
        formValid,

        onLoginClick,
    }
}
