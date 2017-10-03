"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var estados_mock_1 = require("./estados-mock");
var AFD = /** @class */ (function () {
    function AFD(name, symbols) {
        this.name = name;
        this.alphabet = symbols;
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
        throw ("Erro ao encontrar initcial");
    };
    AFD.prototype.checkFinal = function () {
        for (var i in this.states) {
            if (this.states[i].initial) {
                if (this.finalState === undefined)
                    this.finalState = [this.states[i]];
                else
                    this.finalState.push(this.states[i]);
            }
        }
        if (this.finalState.length > 0) {
            return this.finalState;
        }
        else {
            throw ("Erro ao encontrar estados finais");
        }
    };
    return AFD;
}());
exports.AFD = AFD;
var teste = new AFD('TESTE', ['a', 'b', 'c']);
console.log(teste.addState(estados_mock_1.ESTADOS[0]));
console.log(teste.addState(estados_mock_1.ESTADOS[1]));
console.log(teste.addState(estados_mock_1.ESTADOS[2]));
console.log(teste.addState(estados_mock_1.ESTADOS[3]));
console.log(teste.checkInitial());
console.log(teste.checkFinal());
console.log(teste);
