## Examples

### Day.js
1. To get the current date with the given format:
```sh
dayjs().format("DD-MM-YYYY");
```
2. To get a previous day by 1:
```sh
dayjs().subtract(1, "d").format("DD-MM-YYYY");
```
3. To get the date from 7 years and 50 days before
```sh
now.subtract(7, "y").subtract(50, "d").format("DD-MM-YYYY");
``` 
4. To get the remaining time to Christmas
```sh
const xMas = dayjs("2020-12-25").format("YYYY-MM-DD");
dayjs().to(xMas);
```