import { User } from 'app/entities/user/user.interface';
import { Permission } from 'app/entities/permission/permission.interface';
export const STATUS_LOGIN = 'LOGIN';
export const STATUS_UNLOGIN = 'UNLOGIN';

export type LoginStatus =  'LOGIN' | 'UNLOGIN';

export interface AuthState {
    status?: LoginStatus;
    user?: User;
    token?: string;
    permissions?: Permission[];
}

