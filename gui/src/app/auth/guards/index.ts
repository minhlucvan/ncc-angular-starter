import { PermissionGuard } from './permission/permission.guard';
import { AuthGuard } from './auth/auth.guard';

export const GUARDS = [
  AuthGuard,
  PermissionGuard
];
