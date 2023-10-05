//your JS code here. If required.
// Get browser information using the navigator object
        const browserName = navigator.appName;
        const browserVersion = navigator.appVersion;

        // Display the information in the browser-info div
        const browserInfoDiv = document.getElementById('browser-info');
        browserInfoDiv.textContent = "You are using " + browserName + " version " + browserVersion;
