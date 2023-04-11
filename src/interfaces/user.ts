


export interface IUserLogin {
    username: string;
    name: string;
    lastname: string;
    token:    string;
    role:     string;
    img:      string;
}



export interface IRegisterUser {
    name: string;
    lastname: string;
    username: string;
    password: string;
    email: string;
    role: string;
    devTitle: string;
    stack?: string | string[];
    image?: string;
    id?: string;

}



