## Examples

### moment.js
1. To get the current date with the given format:
```sh
moment().format("DD-MM-YYYY");
```
2. To get a previous day by 1:
```sh
moment().subtract(1, "D").format("DD-MM-YYYY");
```
3. To get the date from 7 years and 50 days before
```sh
moment().subtract(7, "years").subtract(50, "days").format("DD-MM-YYYY");
``` 
4. To get the remaining time to Christmas
```sh
const xMas = moment("2020-12-25");
moment().to(xMas)
```