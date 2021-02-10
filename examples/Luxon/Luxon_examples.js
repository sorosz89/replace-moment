const { DateTime, Interval } = require("luxon");
const now = DateTime.local();
const xMas = DateTime.fromObject({year: DateTime.local().year, month: 12, day: 25});

module.exports = [
    [
        "Formatting: DD-MM-YYYY",
        now.toFormat("dd-MM-yyyy")
    ],
    [
        "Now",
        now.toFormat("dd-MM-yyyy")
    ],
    [
        "Minus 1 day",
        now.minus({days: 1}).toFormat("dd-MM-yyyy")
    ],
    [
        "Minus 7 years and 50 days",
        now.minus({years: 7, days: 50}).toFormat("dd-MM-yyyy")
    ],
    [
        "Time to Christmas",
        `${Math.round(Interval.fromDateTimes(now, xMas).length('days'))} day(s)`
    ]
];