export abstract class UserRegisterRequestDto {
    name!: string;
    email!: string;
    addressZipCode!: string;
    phone!: string;
    cpf!: string;
    profilesIds!: string[] ;
}
