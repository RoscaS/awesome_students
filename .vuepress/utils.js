
let cleanString = string => capitalize(string.trim().split(' ')[0]);

let capitalize = string => string[0].toUpperCase() + string.slice(1);

function firstNamesOnly(field) {
  let firstNames = [];

  for (let i of field.split(',')) {
    firstNames.push(
      cleanString(i.includes('<') ? i.replace('<', '') : i),
    );
  }
  return firstNames.join(', ');
}

export { firstNamesOnly, capitalize };
