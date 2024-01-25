// background colour picker
let backgroundPicker = document.createElement('input');
backgroundPicker.type = 'color';
backgroundPicker.id = 'backgroundPicker';
let changeBackgroundDiv = document.getElementById('changeBackground');
changeBackgroundDiv.appendChild(backgroundPicker)

// text colour picker
let fontPicker = document.createElement('input');
fontPicker.type = 'color';
fontPicker.id = 'fontPicker';
let changeTextDiv = document.getElementById('changeText');
changeTextDiv.appendChild(fontPicker)



// add the submit color button
let submitBtn = document.createElement('button')
submitBtn.innerHTML = "submit"
document.getElementById('submitButtons').appendChild(submitBtn)
submitBtn.addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.executeScript(tabs[0].id, {
      code: `document.body.style.setProperty('background-color','${backgroundPicker.value}','important');
              var divs = document.getElementsByTagName('div');
              var canvases = document.getElementsByTagName('canvas');
              var tables = document.getElementsByTagName('table');
              var spans = document.getElementsByTagName('span');
              for (let div of divs) {
                div.style.setProperty('background-color','transparent','important');
              }
              if(canvases){
                for (let canvas of canvases) {
                  canvas.style.setProperty('background-color','transparent','important');
                }
              }
              if(tables){
                for (let table of tables) {
                  table.style.setProperty('background-color','transparent','important');
                }
              }
              `
    });
    chrome.tabs.executeScript(tabs[0].id, {
      code: `document.body.style.setProperty('color','${fontPicker.value}','important');
      [...document.querySelectorAll('p')].forEach(el => el.style.setProperty('color','${fontPicker.value}','important'));
      [...document.querySelectorAll('li')].forEach(el => el.style.setProperty('color','${fontPicker.value}','important'));
      [...document.querySelectorAll('h1')].forEach(el => el.style.setProperty('color','${fontPicker.value}','important'));
      [...document.querySelectorAll('h2')].forEach(el => el.style.setProperty('color','${fontPicker.value}','important'));
      [...document.querySelectorAll('h3')].forEach(el => el.style.setProperty('color','${fontPicker.value}','important'));
      [...document.querySelectorAll('h4')].forEach(el => el.style.setProperty('color','${fontPicker.value}','important'));`
    })
  });
})

// add the change colour button
let buttonButton = document.createElement('button')
buttonButton.innerHTML = "Change Button Colours"
document.getElementById('submitButtons').appendChild(buttonButton)
buttonButton.addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(tabs[0].id, {
      code: `let buttons = document.getElementsByTagName('button')
      for (let button of buttons) {
        button.style.color = "white";
        button.style.backgroundColor = "green";
      }`
    })
  })
})


// add the font size changer
let fontInput = document.createElement('input')
fontInput.placeholder = "Font Size (Integer)"

let fontSubmit = document.createElement('button')
fontSubmit.innerHTML = "Change Font"
document.getElementById('font').appendChild(fontInput)
document.getElementById('font').appendChild(fontSubmit)



fontSubmit.addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(tabs[0].id, {
      code: `document.body.style.setProperty('font-size','${fontInput.value}','important');
      [...document.querySelectorAll('p')].forEach(el => el.style.setProperty('font-size','${fontInput.value}','important'));
      [...document.querySelectorAll('li')].forEach(el => el.style.setProperty('font-size','${fontInput.value}','important'));
      [...document.querySelectorAll('h1')].forEach(el => el.style.setProperty('font-size','${fontInput.value}','important'));
      [...document.querySelectorAll('h2')].forEach(el => el.style.setProperty('font-size','${fontInput.value}','important'));
      [...document.querySelectorAll('h3')].forEach(el => el.style.setProperty('font-size','${fontInput.value}','important'));
      [...document.querySelectorAll('h4')].forEach(el => el.style.setProperty('font-size','${fontInput.value}','important'));`
    })
  })
})