import { AuthState } from './auth-state/auth-state.interface';
import { UiState } from './ui-state/ui-state.interface';

export interface  AppState {
    ui?: UiState;
    auth?: AuthState;
}
