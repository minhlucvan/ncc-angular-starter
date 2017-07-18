export interface LoginState {
    greedings: string[];
    error: any;
    status: boolean;
}

export const initialState: LoginState = {
    greedings: ['Welcome Back'],
    error: null,
    status: false
};
