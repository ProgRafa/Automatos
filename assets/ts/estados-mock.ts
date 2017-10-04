import {State} from './State'
import { TABELA } from './transition-mock'

export const ESTADOS: State[] = [
    {   
        id: 0,
        name: 'q0',
        targets: [TABELA[0]],                        
        initial: true,
        final: false,
    },
    {   
        id: 1,
        name: 'q1',
        targets: [TABELA[1]],
        initial: false,
        final: false,
    },
    {   
        id: 2,
        name: 'q2',
        targets: [TABELA[2]],
        initial: false,
        final: true,
    },
    {   
        id: 3,
        name: 'q3',
        targets: [TABELA[3]],
        initial: false,
        final: true,
    }
]