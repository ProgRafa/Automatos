import { State } from './State'
import {ESTADOS} from './estados-mock'


export class AFD {
    private currentState: State
    private initialState: State
    private finalState: State[] = new Array()

    private wordCount: number = 0

    constructor(private word: string[], 
                private alphabet: string[], 
                private states: State[]){
                this.renderAFD()  
                this.setter(this.states)
                this.currentState = this.initialState 
                document.getElementById(this.initialState.id).className+=" initial"
                for(let i in this.finalState)
                    document.getElementById(this.finalState[i].id).className+=" final"
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
        if(state.initial){
            this.initialState = state
        }
    }
    setFinals(state: State){
        if(state.final)
            this.finalState.push(state)  
        
    }
    swippingStates(){
        if(this.wordCount == this.alphabet.length){
            document.getElementsByClassName('btn')[0].className+=" disabled"
            document.getElementById("keys").innerText += '}';
            if(this.checkIsValid()){
                document.getElementById("auto").style="background: rgba(10, 160, 60, 0.9);"
            }else{
                document.getElementById("auto").style="background: rgba(160, 30, 30, 0.9);"
            }
            return
        }

        this.updateBarWords(this.alphabet[this.wordCount])
        
        let targets = this.currentState.targets
        
        for(let i in targets){
            if(this.searchKey(targets[i]['key'])){
                this.wordCount++
                document.getElementById(this.currentState.id).style="background: orange"
                this.currentState = this.searchState(targets[i].targetState) 
                document.getElementById(this.currentState.id).style="background: red"

                return
            }
        }
 
        throw "Palavra não pertence ao alfabeto"
    }
    searchKey(keys: string[]): boolean{
        let sym = this.alphabet[this.wordCount]

        for(let j in keys){
            if(sym == keys[j]){
                return true
            }
        }

        return false
    }
    checkIsValid(): boolean{
        return this.currentState.final
    }
    searchState(rot: string): State{
        for(var i in this.states){
            if(rot === this.states[i].name){
                console.log(this.states[i])
                return this.states[i]
            }
        }
    }

    renderAFD(): void{
        for(var i in this.states){
            let col = document.createElement("div")
            col.className='col';
            let newElement = document.createElement("div")
            newElement.className = 'state'
            newElement.id=this.states[i].id
            newElement.innerText = this.states[i].name
            document.getElementById('corpo').appendChild(col)
            col.appendChild(newElement)
        }
    }
    updateBarWords(word: string): void{
        document.getElementById("keys").innerText+=word+', '
    }
}

let teste = new AFD(['a', 'b', 'b', 'a'], ['a', 'b', 'c'], ESTADOS);

teste.swippingStates()

//console.log(teste)