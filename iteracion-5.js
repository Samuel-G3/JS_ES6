// 5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array
// con los valores que sean mayor que 18
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const agesMoreThanEighteen = ages.filter((age) => age > 18);
console.log(agesMoreThanEighteen);

// 5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array
// con los valores que sean par.
const ages1 = [22, 14, 24, 55, 65, 21, 12, 13, 90];
//* par = resto 0  resto = %

const parAge = ages1.filter((par) => {
  return par % 2 == 0;
});

console.log(parAge);

// 5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array
// con los streamers que tengan el gameMorePlayed = 'League of Legends'.
const streamers = [
{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const streamersLol = streamers.filter((more) => {
     return more.gameMorePlayed == 'League of Legends';
});
 console.log(streamersLol);


// 5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array
// con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos
// usar la funcion .includes() para la comprobación.
const streamers = [
{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const includeU = streamers.filter((uName) => {
    return uName.name.includes('u')
});
console.log(includeU);

// 5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan
// el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion
// .includes() para la comprobación.
// Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando
// .age sea mayor que 35.

const playLol = streamers.filter ((playerLol) =>{
    const containsLegend = playerLol.gameMorePlayed.toLowerCase().includes('legends');
    if (containsLegend && playerLol.age > 35){
        playerLol.gameMorePlayed = playerLol.gameMorePlayed.toUpperCase();
    }
    return containsLegend;
});
    console.log(playLol);