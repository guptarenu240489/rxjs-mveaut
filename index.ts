import { combineLatest, fromEvent } from 'rxjs';

const temperatureInput = document.getElementById('temperature-input');
const conversionDropdown = document.getElementById('conversion-dropdown');
const resultText = document.getElementById('result-text');

const temperatureInput$ = fromEvent(temperatureInput, 'input');
const conversionDropdown$ = fromEvent(conversionDropdown, 'input');

combineLatest([temperatureInput$, conversionDropdown$]).subscribe({
  next: ([temperatureInput, conversionInput]) => {
    const temperature = Number(temperatureInput.target['value']);
    const conversion = conversionInput.target['value'];
    console.log(conversion);
    let result: number;
    if (conversion === 'f-to-c') {
      result = ((temperature - 32) * 5) / 9;
    } else if (conversion === 'c-to-f') {
      result = (temperature * 9) / 5 + 32;
    }
    resultText.innerHTML = String(result);
  },
});
