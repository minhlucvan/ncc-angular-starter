import { LoginState } from './login.state';

export const selectLogin = (state: any) => (state.login);

export const selectGreedings = (state: LoginState) => (state.greedings);

export const selectOneOfGreedings = (state: LoginState) => (state.greedings[Math.random() * (state.greedings.length - 1)]);

