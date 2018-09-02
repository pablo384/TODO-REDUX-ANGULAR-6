import * as fromFiltro from './filter.actions';

const stadoInicial: fromFiltro.filtrosValidos = 'todos';
export function filtroReducer(state = stadoInicial,
    action: fromFiltro.AccionesFilter): fromFiltro.filtrosValidos {
    switch (action.type) {
        case fromFiltro.SET_FILTRO:
            return action.filtro;
        default:
            return state;
    }
}
