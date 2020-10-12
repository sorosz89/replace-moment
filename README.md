# replace-moment

Tiny evaluation of moment.js alternatives

## Background

<p>"Moment.js has been successfully used in millions of projects, and we are happy to have contributed to making date and time better on the web. As of September 2020, Moment gets over 12 million downloads per week! However, Moment was built for the previous era of the JavaScript ecosystem. The modern web looks much different these days. Moment has evolved somewhat over the years, but it has essentially the same design as it did when it was created in 2011. Given how many projects depend on it, we choose to prioritize stability over new features.<p>

_"We now generally consider Moment to be a legacy project in maintenance mode. It is not dead, but it is indeed done."_

## Possible alternatives

| Name                                                                                          | Description                                                                                                         |
| --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| [Intl](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl) | The Intl object is the namespace for the ECMAScript Internationalization API                                        |
| [Luxon](https://moment.github.io/luxon/)                                                      | A powerful, modern, and friendly wrapper for Javascript dates and times.                                            |
| [date-fns](https://date-fns.org/)                                                             | The most comprehensive, yet simple and consistent toolset for manipulating JavaScript dates in a browser & Node.js. |
| [days.js](https://github.com/iamkun/dayjs)                                                    | Fast 2kB alternative to Moment.js with the same modern API                                                          |

## Usage

### Installation

```sh
yarn
```

### Execution

```sh
yarn timing
```

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
