let changeColor = document.getElementById('changeColor');
let subscriptionForm = document.getElementById('newSubscriptionForm');

chrome.storage.sync.get('color', function (data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
});

changeColor.onclick = function (element) {
  let color = element.target.value;
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.executeScript(
      tabs[0].id,
      { code: 'document.body.style.backgroundColor = "' + color + '";' });
  });
};

subscriptionForm.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log(event);
  console.log(this);

  let formData = new  FormData(event.target);
  for (let [key, value] of formData) {
    console.log(`${key}: ${value}`);
  }
});