"use strict"

const cTable = require("console.table");
const dateFnsExamples = require("./examples/date-fns/date_fns_examples");
const momentExamples = require("./examples/moment_examples");
const dayjsExamples = require("./examples/dayjs_examples");
const dateFnsTable = [];
const momentTable = [];
const dayjsTable = [];

const addToTable = (table, [name, entry]) => table.push({ name, entry });

momentExamples.forEach(i => addToTable(momentTable, i));
dateFnsExamples.forEach(i => addToTable(dateFnsTable, i));
dayjsExamples.forEach(i => addToTable(dayjsTable, i));

console.table("\nMOMENT.JS", momentTable);
console.table("\nDATE-FNS", dateFnsTable);
console.table("\nDay.js", dayjsTable);