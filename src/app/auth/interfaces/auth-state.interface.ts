export interface IAuthState {
     isAuthenticated: boolean;
     user: IAuthUser | null;
}

interface IAuthUser {
     city: string;
     credits: number;
     department: string;
     email: string;
     id: string;
     name: string;
     hasloggedInBefore: boolean;
     isActive: boolean;
     lastname: string;
     phone: string;
     picture: string | null;
     role: string;
     workplace: string;
}

export interface ILoginResponse {
     access_token: string;
     user: IAuthUser;
}
