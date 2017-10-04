import { Transition } from './Transition'

export const TABELA: Transition[] = [
    {
        currentState: 'q0',
        key: ['a'],
        targetState: 'q1'
    },
    {
        currentState: 'q1',
        key: ['b'],
        targetState: 'q2'
    },
    {
        currentState: 'q2',
        key: ['a', 'b'],
        targetState: 'q3'
    },
]
