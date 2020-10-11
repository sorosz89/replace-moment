const { format, sub, intervalToDuration } = require("date-fns");
const now = Date.now();
const xMas = new Date("2020-12-25");

module.exports = [
    [
        "Formatting: DD-MM-YY",
        format(now, "dd-MM-yyyy"),
        "format(now, \"dd-MM-yyyy\")"
    ],
    [
        "Now",
        format(now, "dd-MM-yyyy"),
        "format(now, \"dd-MM-yyyy\")"
    ],
    [
        "Minus 1 day",
        format(sub(now, { days: 1 }), "dd-MM-yyyy"),
        "format(sub(now, { days: 1 }), \"dd-MM-yyyy\")"
    ],
    [
        "Minus 7 years and 50 days",
        format(sub(now, { years: 7, days: 1 }), "dd-MM-yyyy"),
        "format(sub(now, { years: 7, days: 1 }), \"dd-MM-yyyy\")"
    ],
    [
        "Time to christmas",
        JSON.stringify(intervalToDuration(
            {
                start: now,
                end: xMas
            }
        )
        ),
        "intervalToDuration({ start: now, end: xMas })"
    ]
];
