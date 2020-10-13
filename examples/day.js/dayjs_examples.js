const dayjs = require('dayjs')
const now = dayjs();
const xMas = dayjs("2020-12-25").format("YYYY-MM-DD");

const relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime);

module.exports = [
    [   
        "Formatting: DD-MM-YYYY",
        now.format("DD-MM-YYYY")
    ],
    [
        "Now",
        now.format("DD-MM-YYYY")
    ],
    [
        "Minus 1 day",
        now.subtract(1, "d").format("DD-MM-YYYY")
    ],
    [
        "Minus 7 years and 50 days",
        now.subtract(7, "y").subtract(50, "d").format("DD-MM-YYYY")
    ],
    [
        "Time to Christmas",
        now.to(xMas)
    ]
];