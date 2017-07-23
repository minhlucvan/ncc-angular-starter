import { Observable } from 'rxjs/Rx';

export interface State<T> {
    key: string;
    paths: string[];

    state$: Observable<T>;

    selector: (any: any) => any;
}
