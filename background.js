const networkFilters = {
  urls: [
    "https://lightnovelstranslations.com/feed/"
  ]
};

chrome.runtime.onInstalled.addListener(function () {
  // Page actions are disabled by default and enabled on select tabs
  chrome.action.disable();

  chrome.storage.sync.set({ color: '#3aa757' }, function () {
    console.log("The color is green.");
  });
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: { hostSuffix: '.google.com', schemes: ['https'] },
      })
      ],
      actions: [new chrome.declarativeContent.ShowAction()]
    }]);
  });
  console.log("Creating Alarm");
  chrome.alarms.create(`TestAlarm`, {
    when: Date.now() + 100,
    periodInMinutes: 1,
  });
  chrome.action.setBadgeBackgroundColor(
    {color: '#00FF00'},  // Also green
    () => { /* ... */ },
  );  
});

// chrome.webRequest.onCompleted.addListener((res) => {
//   console.log(`We got the response from ${res.url} at ${res.timeStamp}. 
//   It responded with a status code of: ${res.statusCode}.`);
// }, networkFilters);

chrome.alarms.onAlarm.addListener((alarm) => {
  console.log("ALARMING!");
  console.log(`We received an alarm named: ${alarm.name}! It was scheduled to run at ${new Date(alarm.scheduledTime).toLocaleString()}! WOW!`);
  console.log(`We should do something cool here now :D!`);
  // fetch('https://lightnovelstranslations.com/feed/')
  //.then(r => r.text())
  //.then(result => {
  //   console.log(result);
  // })
});