//Добавление
function addCountry(countryName, capitalName) {
    countries[countryName] = capitalName;
}

//Удаление
function deleteCountry(enteredCountryName) {
    if (enteredCountryName in countries) {
        const isTrue = confirm('Are you sure?');

        if(isTrue) {
            delete countries[enteredCountryName];
            alert('deleted');
        }
    } else console.log(`${enteredCountryName}?! Xm.. There isn't entered country :/`);
}

//Узнать столицу
function getCountryInfo(enteredCountryName) {
    if (enteredCountryName in countries) {
        console.log(`Country: ${enteredCountryName}, Capital: ${countries[enteredCountryName]}`);
    } else {
        console.log(`${enteredCountryName}?! Xm.. There isn't entered country :/`);
    }
}

// Вывести весь список стран
function coutryiesList() {
    for(let i in countries) {
        getCountryInfo(i);
    }
}