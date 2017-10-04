"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var estados_mock_1 = require("./estados-mock");
var AFD = /** @class */ (function () {
    function AFD(word, alphabet, states) {
        this.word = word;
        this.alphabet = alphabet;
        this.states = states;
        this.finalState = new Array();
        this.wordCount = 0;
        this.renderAFD();
        this.setter(this.states);
        this.currentState = this.initialState;
        document.getElementById(this.initialState.id).className += " initial";
        for (var i in this.finalState)
            document.getElementById(this.finalState[i].id).className += " final";
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
        if (state.initial) {
            this.initialState = state;
        }
    };
    AFD.prototype.setFinals = function (state) {
        if (state.final)
            this.finalState.push(state);
    };
    AFD.prototype.swippingStates = function () {
        if (this.wordCount == this.alphabet.length) {
            document.getElementsByClassName('btn')[0].className += " disabled";
            document.getElementById("keys").innerText += '}';
            if (this.checkIsValid()) {
                document.getElementById("auto").style = "background: rgba(10, 160, 60, 0.9);";
            }
            else {
                document.getElementById("auto").style = "background: rgba(160, 30, 30, 0.9);";
            }
            return;
        }
        this.updateBarWords(this.alphabet[this.wordCount]);
        var targets = this.currentState.targets;
        for (var i in targets) {
            if (this.searchKey(targets[i]['key'])) {
                this.wordCount++;
                document.getElementById(this.currentState.id).style = "background: orange";
                this.currentState = this.searchState(targets[i].targetState);
                document.getElementById(this.currentState.id).style = "background: red";
                return;
            }
        }
        throw "Palavra não pertence ao alfabeto";
    };
    AFD.prototype.searchKey = function (keys) {
        var sym = this.alphabet[this.wordCount];
        for (var j in keys) {
            if (sym == keys[j]) {
                return true;
            }
        }
        return false;
    };
    AFD.prototype.checkIsValid = function () {
        return this.currentState.final;
    };
    AFD.prototype.searchState = function (rot) {
        for (var i in this.states) {
            if (rot === this.states[i].name) {
                console.log(this.states[i]);
                return this.states[i];
            }
        }
    };
    AFD.prototype.renderAFD = function () {
        for (var i in this.states) {
            var col = document.createElement("div");
            col.className = 'col';
            var newElement = document.createElement("div");
            newElement.className = 'state';
            newElement.id = this.states[i].id;
            newElement.innerText = this.states[i].name;
            document.getElementById('corpo').appendChild(col);
            col.appendChild(newElement);
        }
    };
    AFD.prototype.updateBarWords = function (word) {
        document.getElementById("keys").innerText += word + ', ';
    };
    return AFD;
}());
exports.AFD = AFD;
var teste = new AFD(['a', 'b', 'b', 'a'], ['a', 'b', 'c'], estados_mock_1.ESTADOS);
teste.swippingStates();
//console.log(teste) 
