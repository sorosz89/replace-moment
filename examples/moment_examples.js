const moment = require("moment");
const now = moment();
const xMas = moment("2020-12-25");

module.exports = [
    [
        "Formatting: DD-MM-YY",
        moment().format("DD-MM-YYYY"),
        "moment().format(\"DD-MM-YYYY\")"
    ],
    [
        "Now",
        moment().format("DD-MM-YYYY"),
        "moment()"
    ],
    [
        "Minus 1 day",
        moment().subtract(1, "D").format("DD-MM-YYYY"),
        "moment().subtract(1, \"D\")"
    ],
    [
        "Minus 7 years and 50 days",
        moment().subtract(7, "years").subtract(50, "days").format("DD-MM-YYYY"),
        "moment().subtract(7, \"years\").subtract(50, \"days\")"
    ],
    [
        "Time to christmas",
        now.to(xMas),
        "... now.to(xMas, true) ..."
    ]
];
