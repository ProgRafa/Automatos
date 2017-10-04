var AFD = /** @class */ (function () {
    function AFD(word, alphabet, states) {
        this.word = word;
        this.alphabet = alphabet;
        this.states = states;
        this.wordCount = 0;
        this.setter(this.states);
        this.currentState = this.initialState;
    }
    AFD.prototype.setter = function (states) {
        for (var i in states) {
            this.setInital(states[i]);
            this.setFinals(states[i]);
        }
        if (!this.initialState)
            throw "Não há estado inicial";
        if (!this.finalState)
            throw "Não há Estado(s) Final(is)";
    };
    AFD.prototype.setInital = function (state) {
        if (state.initial)
            this.initialState = state;
    };
    AFD.prototype.setFinals = function (state) {
        if (state.final) {
            this.finalState = new Array();
            this.finalState.push(state);
        }
    };
    AFD.prototype.swippingStates = function () {
        this.acessKeys(this.currentState);
    };
    AFD.prototype.acessKeys = function (state) {
        for (var i in state.targets) {
            if (this.searchKey(state.targets[i]['key'])) {
                this.currentState = this.states[1];
                console.log(this.currentState);
            }
        }
    };
    AFD.prototype.searchKey = function (keys) {
        var sym = this.alphabet[this.wordCount];
        for (var j in keys) {
            console.log(keys[j]);
        }
        return true;
    };
    return AFD;
}());

TABELA = [
    {
        father: 'q0',
        key: ['a'],
        targetState: 'q1'
    },
    {
        father: 'q0',
        key: ['b'],
        targetState: 'q2'
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
];

ESTADOS = [
    {
        id: 0,
        name: 'q0',
        targets: [TABELA[0], TABELA[1]],
        initial: true,
        final: false,
    },
    {
        id: 1,
        name: 'q1',
        targets: [TABELA[2]],
        initial: false,
        final: false,
    },
    {
        id: 2,
        name: 'q2',
        targets: [TABELA[3]],
        initial: false,
        final: true,
    },
    {
        id: 3,
        name: 'q3',
        targets: [TABELA[4]],
        initial: false,
        final: true,
    }
];

var teste = new AFD(['a', 'b', 'b', 'a'], ['a', 'b', 'c'], ESTADOS);
teste.swippingStates();

//Cria o AFD na página web
// function printAFD(AFD){
//     for(var i in AFD.states){
//         col = document.createElement("div")
//         col.className='col';
//         newElement = document.createElement("div")
//         if(AFD.states[i].initial)
//             newElement.style="border: 2px solid green"
//         if(AFD.states[i].final)
//             newElement.style="border: 2px solid black"
//         newElement.className = 'state'
//         newElement.innerText = AFD.states[i].name
//         document.getElementById('corpo').appendChild(col)
//         col.appendChild(newElement)
//     }
// }
