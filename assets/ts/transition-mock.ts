import { Transition } from './Transition'

export const TABELA: Transition[] = [
    {
        father: 'q0',
        key: ['a', 'b'],
        targetState: 'q1'
    },
    {
        father: 'q1',
        key: ['b'],
        targetState: 'q2'
    },
    {
        father: 'q2',
        key: ['a', 'b'],
        targetState: 'q3'
    },
    {
        father: 'q3',
        key: ['a', 'b'],
        targetState: 'q3'
    }
]
