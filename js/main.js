const addButton = document.getElementById('add');
const removeButton = document.getElementById('remove');
const infoButton = document.getElementById('info');
const listButton = document.getElementById('list');
const countries = {} //Хэш для стран


addButton.addEventListener('click', function() {
    const answerCountry = prompt('Enter name of Country:');
    const answerCapital = prompt('Enter Capital of this Country:');

    addCountry(answerCountry, answerCapital);
});

removeButton.addEventListener('click', function() {
    const answerCountry = prompt('Enter Country for remove:');

    deleteCountry(answerCountry);
});

infoButton.addEventListener('click', function() {
    const answerCountry = prompt('Enter your most favorite Country:');

    getCountryInfo(answerCountry);
});

listButton.addEventListener('click', function() {
    coutryiesList();
});


//Добавление
countries['Ukraine'] = 'Kiev';
countries['Belarus'] = 'Minsk';
countries['Spain'] = 'Barcelona';
countries['Lietuva'] = 'Vilnius';

addCountry('Poland', 'Warszawa');
addCountry('Japan', 'Tokio');
addCountry('Germany', 'Berlin');
addCountry('Hungry', 'Budapest');
addCountry('France', 'Paris');


