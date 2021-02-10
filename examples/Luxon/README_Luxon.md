## Examples

### Luxon
1. To get the current date with the given format:
```sh
DateTime.local().toFormat("dd-MM-yyyy")
```
2. To get a previous day by 1:
```sh
DateTime.local().minus({days: 1}).toFormat("dd-MM-yyyy")
```
3. To get the date from 7 years and 50 days before
```sh
DateTime.local().minus({years: 7, days: 50}).toFormat("dd-MM-yyyy")
``` 
4. To get the remaining time to Christmas
```sh
const xMas = DateTime.fromObject({year: DateTime.local().year, month: 12, day: 25});
Interval.fromDateTimes(now, xMas).length('days')
```