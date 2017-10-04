import { State } from './State'
import {ESTADOS} from './estados-mock'


export class AFD {
    private currentState: State
    private initialState: State
    private finalState: State[]

    private wordCount: number = 0

    constructor(private word: string[], 
                private alphabet: string[], 
                private states: State[]){
                this.setter(this.states)    
                this.currentState = this.initialState
                }

    setter(states: State[]){
        for(var i in states){
            this.setInital(states[i])
            this.setFinals(states[i])        
        }
        if(!this.initialState)
            throw "Não há estado inicial"
        if(!this.finalState)
            throw "Não há Estado(s) Final(is)"
    }
    setInital(state: State){
        if(state.initial)
            this.initialState = state
        
    }
    setFinals(state: State){
        if(state.final){
            this.finalState = new Array()
            this.finalState.push(state)
        }
    }
    swippingStates(){
        this.acessKeys(this.currentState)
    }
    acessKeys(state: State){
        for(let i in state.targets){
            console.log(state.targets[i]['key'])
            if(this.searchKey(state.targets[i]['key'])){
                this.currentState = this.states[1]
                console.log(this.currentState)
            }
        }
    }
    searchKey(keys: string[]): boolean{
        let sym = this.alphabet[this.wordCount]

        for(let j in keys){
            console.log(j)
        }
        return true
    }
}

let teste = new AFD(['a', 'b', 'b', 'a'], ['a', 'b', 'c'], ESTADOS);

teste.swippingStates()

//console.log(teste)