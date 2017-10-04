"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var transition_mock_1 = require("./transition-mock");
exports.ESTADOS = [
    {
        id: 0,
        name: 'q0',
        targets: [transition_mock_1.TABELA[0]],
        initial: true,
        final: false,
    },
    {
        id: 1,
        name: 'q1',
        targets: [transition_mock_1.TABELA[1]],
        initial: false,
        final: false,
    },
    {
        id: 2,
        name: 'q2',
        targets: [transition_mock_1.TABELA[2]],
        initial: false,
        final: true,
    },
    {
        id: 3,
        name: 'q3',
        targets: [transition_mock_1.TABELA[3]],
        initial: false,
        final: true,
    }
];
