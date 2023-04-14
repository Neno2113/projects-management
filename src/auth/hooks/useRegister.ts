import { useContext, useState } from "react";
import { useMultiSelect } from "chakra-multiselect";
import { useNavigate } from "react-router-dom";
import { devTecnologies } from "../../data/dev_tecnologuies";
import validateEmail from "../../helpers/validateEmail";
import { useForm } from "../../hooks/useForm";
import { IRegisterUser, IUser } from "../interfaces/user";
import { AuthContext } from "../context";
import { useUser } from "./useUser";

export const useRegister = ( id: string = '') => {

    const { startRegisterUser, updateUser } = useContext(AuthContext);
    const { userQuery } = useUser( id );
    const [initialState] = useState({
        username: (userQuery.isFetched) ? userQuery.data!.username : '',
        password: '',
        role: (userQuery.isFetched) ? userQuery.data!.role : '',
        name: (userQuery.isFetched) ? userQuery.data!.name : '',
        lastname: (userQuery.isFetched) ? userQuery.data!.lastname : '',
        email: (userQuery.isFetched) ? userQuery.data!.mail : '',
        devTitle: (userQuery.isFetched) ? userQuery.data!.devTitle : '',
        stack: [''],
    });
   
    

    if( userQuery.data){
        // setInitialState({
        //     username: userQuery.data!.username,
        //     password: '',
        //     role: userQuery.data!.role,
        //     name: userQuery.data!.name,
        //     lastname: userQuery.data!.lastname,
        //     email: userQuery.data!.mail,
        //     devTitle: userQuery.data!.devTitle,
        //     stack: [''],
        // });
   
    } 


    const navigate = useNavigate();
    const { value, options, onChange:selectMultiple } = useMultiSelect({
        value: (userQuery.data?.stack) ? userQuery.data!.stack : [] ,
        options: devTecnologies
    })

    const { form, onChange, username, password, name, lastname, role, email, devTitle, stack, isPasswordValid, 
        isUserNameValid, isRoleValid, formErrors, isEmailValid, isLastNameValid, isNameValid,
        isDevTitleValid, isStackValid, formValid, setState } = 
        useForm({ 
            ...initialState,
            formErrors: { username: '', password: '', role: '', name: '', lastname: '', email: '', devTitle: '', stack: '' },
            isUserNameValid: true,
            isPasswordValid: true,
            isRoleValid: true,
            isNameValid: true,
            isLastNameValid: true,
            isEmailValid: true,
            isDevTitleValid: true,
            isStackValid: true,
            formValid: false,
         })

    const onRegisterClick = () => {
        if( !validateForm() ) return;

        if(id.length > 1){
            const user: IUser = {
                id,
                mail: email,
                name,
                password,
                lastname,
                role,
                username,
                devTitle,
                stack: value
            }
            updateUser( user, () => {
                navigate('/users');
            });
            return;
        }
        
        const user: IRegisterUser = {
            mail: email,
            name,
            password,
            lastname,
            role,
            username,
            devTitle,
            stack: value
        }
        
        startRegisterUser( user, () => {
            navigate('/users');
        });   
        
    }

    //Validacion de formulario en base al state creado arriba
    const validateForm = () => {
        //Valida que el username no este vacio
        if(username.trim().length === 0){
            setState({
                ...form,
                isUserNameValid: false,
                formErrors: { ...formErrors, username: 'Usuario es requerido.'},
                formValid: false
            })
            return false;
            
        }
        if(password.trim().length === 0 || password.length < 6 ){
            setState({
                ...form,
                isPasswordValid: false,
                formErrors: { ...formErrors, password: 'La contraseña debe tener mas de 6 caracteres'},
                formValid: false
            })
            return false;
        }
        if(name.trim().length === 0){
            setState({
                ...form,
                isNameValid: false,
                formErrors: { ...formErrors, name: 'Nombre es requerido.'},
                formValid: false
            })
            return false;
            
        }
        if(lastname.trim().length === 0){
            setState({
                ...form,
                isLastNameValid: false,
                formErrors: { ...formErrors, lastname: 'Apellido es requerido.'},
                formValid: false
            })
            return false;
        }
        if(role.trim().length === 0){
            setState({
                ...form,
                isRoleValid: false,
                formErrors: { ...formErrors, role: 'Role es requerido.'},
                formValid: false
            })
            return false;
        }
        if(!validateEmail(email)){
            setState({
                ...form,
                isEmailValid: false,
                formErrors: { ...formErrors, email: 'Debe digitar un correo valido.'},
                formValid: false
            })
            return false;
        }
        if(devTitle.trim().length === 0){
            setState({
                ...form,
                isDevTitleValid: false,
                formErrors: { ...formErrors, devTitle: 'Debe digitar el titulo del usuario.'},
                formValid: false
            })
            return false;
        }
        if(value!.length === 0){
            setState({
                ...form,
                isStackValid: false,
                formErrors: { ...formErrors, stack: 'Debe seleccionar una tecnlogia.'},
                formValid: false
            })
            return false;
        }
       
       
        setState({
            ...form,
            isPasswordValid: true,
            isUserNameValid: true,
            isEmailValid: true,
            isLastNameValid: true,
            isNameValid: true,
            isRoleValid: true,
            isDevTitleValid: true,
            isStackValid: true,
            formValid: true,

        })
        return true;
    }


    return {
        isUserNameValid,
        onChange,
        formErrors,
        isPasswordValid,
        isNameValid,
        isLastNameValid,
        isEmailValid,
        isRoleValid,
        isDevTitleValid,
        options,
        value,
        selectMultiple,
        isStackValid,
        onRegisterClick,
        userQuery,
        form,

    }
}
