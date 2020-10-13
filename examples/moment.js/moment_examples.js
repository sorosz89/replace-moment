const moment = require("moment");
const now = moment();
const xMas = moment("2020-12-25");

module.exports = [
    [
        "Formatting: DD-MM-YY",
        now.format("DD-MM-YYYY")
    ],
    [
        "Now",
        now.format("DD-MM-YYYY")
    ],
    [
        "Minus 1 day",
        now.subtract(1, "D").format("DD-MM-YYYY")
    ],
    [
        "Minus 7 years and 50 days",
        now.subtract(7, "years").subtract(50, "days").format("DD-MM-YYYY")
    ],
    [
        "Time to christmas",
        now.to(xMas)
    ]
];
