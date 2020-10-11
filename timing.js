"use strict"

const cTable = require("console.table");
const dateFnsExamples = require("./examples/date_fns_examples");
const momentExamples = require("./examples/moment_examples");
const dateFnsTable = [];
const momentTable = [];

const addToTable = (table, [name, entry, code]) => table.push({ name, entry, code });

momentExamples.forEach(i => addToTable(momentTable, i));
dateFnsExamples.forEach(i => addToTable(dateFnsTable, i));

console.table("\nMOMENT.JS", momentTable);
console.table("\nDATE-FNS", dateFnsTable);