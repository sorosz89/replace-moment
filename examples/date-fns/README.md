## Examples

### DATE-FNS
1. To format a given date:
```sh
format(now, "dd-MM-yyyy");
```
2. To get a previous day by 1 
```sh
format(sub(now, { days: 1 }), "dd-MM-yyyy")
```