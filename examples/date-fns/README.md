## Examples

### DATE-FNS
1. To get the current date with the given format:
```sh
format(Date.now(), "dd-MM-yyyy");
```
2. To get a previous day by 1:
```sh
format(sub(Date.now(), { days: 1 }), "dd-MM-yyyy");
```
3. To get the date from 7 years and 50 days before
```sh
format(sub(Date.now(), { years: 7, days: 1 }), "dd-MM-yyyy");
``` 
4. To get the remaining time to Christmas
```sh
JSON.stringify(
      intervalToDuration({
        start: now,
        end: xMas,
      })
    )
```