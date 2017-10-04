import { State } from './State'
import {ESTADOS} from './estados-mock'
import { Transition } from './Transition'
import { TABELA } from './transition-mock'

export class AFD {
    public word: string[]

    private alphabet: string[]
    private states: State[]
    private transitionTable: Transition[]

    private initialState: State
    private currentState: string = ''
    private finalState: State[]

    constructor(word: string[], symbols: string[], transition: Transition[]){
        this.word = word
        this.alphabet = symbols
        this.transitionTable = transition
    }

    addState(state: State): boolean{ 
        try{
            if(this.states === undefined)
                this.states = [state]
            else 
                this.states.push(state)
            return true
        }catch(err){return false}
    }

    checkInitial(): State{
        for(let i in this.states){
            if(this.states[i].initial){
                this.initialState = this.states[i]
                return this.states[i]
            }
        }
        throw("Erro ao encontrar initcial");
    }

    checkFinal(): State[]{
        for(let i in this.states){
            if(this.states[i].initial){
                if(this.finalState === undefined)
                    this.finalState = [this.states[i]]
                else
                    this.finalState.push(this.states[i])
            }
        }

        if(this.finalState.length > 0){
            return this.finalState
        }else{
            throw("Erro ao encontrar estados finais");
        }
    }
    verifyValidWord(): boolean{
        for(let i in this.word){
            this.word[i].find(this.swippingAlphabet) 
        }    
        
        return false
    }
    swippingAlphabet(id: number): boolean{
        return true 
    }
}

let teste = new AFD(['a', 'b', 'b', 'a'], ['a', 'b', 'c'], TABELA)
console.log(teste.addState(ESTADOS[0]))
console.log(teste.addState(ESTADOS[1]))
console.log(teste.addState(ESTADOS[2]))
console.log(teste.addState(ESTADOS[3]))
console.log(teste.checkInitial())
console.log(teste.checkFinal())
console.log(teste)