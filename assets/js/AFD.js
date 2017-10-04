"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var estados_mock_1 = require("./estados-mock");
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
            console.log(state.targets[i]['key']);
            if (this.searchKey(state.targets[i]['key'])) {
                this.currentState = this.states[1];
                console.log(this.currentState);
            }
        }
    };
    AFD.prototype.searchKey = function (keys) {
        var sym = this.alphabet[this.wordCount];
        for (var j in keys) {
            console.log(j);
        }
        return true;
    };
    return AFD;
}());
exports.AFD = AFD;
var teste = new AFD(['a', 'b', 'b', 'a'], ['a', 'b', 'c'], estados_mock_1.ESTADOS);
teste.swippingStates();
//console.log(teste) 
