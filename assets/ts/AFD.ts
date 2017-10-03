import { State } from './State'
import {ESTADOS} from './estados-mock'

export class AFD {
    public name: string
    private alphabet: string[]
    private states: State[]
    private initialState: State
    private finalState: State[]

    constructor(name: string, symbols: string[]){
        this.name = name
        this.alphabet = symbols
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
}

let teste = new AFD('TESTE', ['a', 'b', 'c']);
console.log(teste.addState(ESTADOS[0]))
console.log(teste.addState(ESTADOS[1]))
console.log(teste.addState(ESTADOS[2]))
console.log(teste.addState(ESTADOS[3]))
console.log(teste.checkInitial())
console.log(teste.checkFinal())
console.log(teste)