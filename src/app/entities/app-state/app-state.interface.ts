import { UiState } from 'app/entities/ui-state/ui-state.interface';
import { AuthState } from 'app/entities/auth-state/auth-state.interface';

export interface AppState {
    ui?: UiState;
    auth?: AuthState;
}
