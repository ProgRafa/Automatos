var State = /** @class */ (function () {
    function State() {
    }
    State.prototype.showSymbols = function () {
    };
    State.prototype.getName = function () {
        return this.name;
    };
    State.prototype.isInitial = function () {
        return this.initial;
    };
    State.prototype.isFinal = function () {
        return this.final;
    };
    return State;
}());

var AFD = /** @class */ (function () {
    function AFD(name, symbols, transition) {
        this.name = name;
        this.alphabet = symbols;
        this.transitionTable = transition
    }
    AFD.prototype.addState = function (state) {
        try {
            if (this.states === undefined)
                this.states = [state];
            else
                this.states.push(state);
            return true;
        }
        catch (err) {
            return false;
        }
    };
    AFD.prototype.checkInitial = function () {
        for (var i in this.states) {
            if (this.states[i].initial) {
                this.initialState = this.states[i];
                return this.states[i];
            }
        }
        throw ("Erro ao encontrar estado inicial");
    };
    AFD.prototype.checkFinal = function () {
        for (var i in this.states) {
            if (this.states[i].final) {
                if (this.finalState === undefined)
                    this.finalState = [this.states[i]];
                else
                    this.finalState.push(this.states[i]);
            }
        }
        if (this.finalState) {
            return this.finalState;
        }
        else {
            throw ("Erro ao encontrar estados finais");
        }
    };
    AFD.prototype.showTransitionTable = function () {
        for(var i in this.transitionTable){
            
        }
    }
    return AFD;
}());

//Cria o AFD na página web
function printAFD(AFD){
    for(var i in AFD.states){
        col = document.createElement("div")
        col.className='col';
        newElement = document.createElement("div")
        if(AFD.states[i].initial)
            newElement.style="border: 2px solid green"
        if(AFD.states[i].final)
            newElement.style="border: 2px solid black"
        newElement.className = 'state'
        newElement.innerText = AFD.states[i].name
        document.getElementById('corpo').appendChild(col)
        col.appendChild(newElement)
    }
}

var ESTADOS = [
    {
        id: 0,
        name: 'q0',
        symbol: [' '],
        initial: true,
        final: false,
    },
    {
        id: 1,
        name: 'q1',
        symbol: [' '],
        initial: false,
        final: true,
    },
    {
        id: 2,
        name: 'q2',
        symbol: [' '],
        initial: false,
        final: true,
    },
    {
        id: 3,
        name: 'q3',
        symbol: [' '],
        initial: false,
        final: true,
    }
];
var transition = [
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
    }
]


var teste = new AFD('TESTE', ['a', 'b', 'c'], transition);
console.log(teste.addState(ESTADOS[0]));
console.log(teste.addState(ESTADOS[1]));
console.log(teste.addState(ESTADOS[2]));
console.log(teste.addState(ESTADOS[3]));
console.log(teste.checkInitial());
console.log(teste.checkFinal());
console.log(teste.showTransitionTable());

printAFD(teste)