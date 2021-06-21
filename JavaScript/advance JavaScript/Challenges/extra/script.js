const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const arrStr = flights.split('+');
for (const item of arrStr) {
  let newStr = item
    .slice(1)
    .replace(/_/, ' ')
    .replace(/;/, ' from ')
    .replace(/;/, ' to ')
    .replace(/;/, ' (')
    .replace(/:/, 'h')
    .replace(/\d+/, '')
    .replace(/\d+/, '');
  newStr += ')';
  let tempVar = [];
  for (const newItem of newStr.split(' ')) {
    if (
      newItem === 'fao' ||
      newItem === 'txl' ||
      newItem === 'bru' ||
      newItem === 'hel' ||
      newItem === 'lis'
    )
      tempVar.push(newItem.toUpperCase());
    else tempVar.push(newItem);
  }
  let finalStr = tempVar.join(' ');
  if (finalStr.trim().startsWith('Delayed')) {
    console.log(`🔴 ${finalStr}`);
  } else console.log(finalStr.padStart(45));
}

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)
