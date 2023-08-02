// webskitter api not follow my rule
// export class Registration {
//     full_name!:string;
//     gender!:string;
//     email!:string;
//     password!:string;
// }

// webskitters api followed rule
export class Registration {
    first_name!:string;
    last_name!:string;
    email!:string;
    password!:string;
}


export class Login {
    email!: string;
    password!: string;
}