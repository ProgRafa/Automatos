import { Transition } from './Transition'

export class State{
    public id: number
    public name: string
    public targets: Transition[]
    public initial: boolean
    public final: boolean
}