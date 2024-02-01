showCurrencyExchange();


let firstCurrency = "";
let secondCurrency = "";

async function showCurrencyExchange(){
  const url = 'https://currency-exchange.p.rapidapi.com/listquotes';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3854bfbfa8mshbf3beaefb62b105p184d8ejsnd3c4541d2bce',
		'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
	}
};
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);

    createFromConvertSelect(result);
    createToConvertSelect(result);
  } catch (error) {
    console.error(error);
  }
}

async function convertCurrencies(){
  const url = `https://currency-exchange.p.rapidapi.com/exchange?from=${firstCurrency}&to=${secondCurrency}&q=1.0`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3854bfbfa8mshbf3beaefb62b105p184d8ejsnd3c4541d2bce',
		'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
} catch (error) {
	console.error(error);
}
}


function createFromConvertSelect(arrayAPI) {
  arrayAPI.forEach(element => {
    const fromConvertSelect = document.querySelector('#fromConvertSelect');
    const optionFromConvertSelect = document.createElement('option');
    optionFromConvertSelect.value = element;
    optionFromConvertSelect.textContent = element;
    firstCurrency = element;
    
    fromConvertSelect.appendChild(optionFromConvertSelect);
  });
    fromConvertSelect.addEventListener('change', function () {
      firstCurrency = this.value;
      convertCurrencies();
    });
  
}

function createToConvertSelect(arrayAPI){
  arrayAPI.forEach(element => {
    const toConvertSelect = document.querySelector('#toConvertSelect');
    const optionToConvertSelect = document.createElement('option');
    optionToConvertSelect.value = element;
    optionToConvertSelect.textContent = element;
    
    toConvertSelect.appendChild(optionToConvertSelect);
  });

  toConvertSelect.addEventListener('change', function () {
    secondCurrency = this.value;
    convertCurrencies();
  });
}

const exchangeButton = document.querySelector('#exchangeButton');
  exchangeButton.addEventListener('click', function () {
    const result = convertCurrencies();
    resultOfConvertion.textContent = result;
    return result;
  });

const resultOfConvertion = document.querySelector('#resultOfConvertion');





