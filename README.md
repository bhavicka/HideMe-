

HideMe is a Chrome extension to hide your Twitter username on the Home and Profile pages.


Right now, I'm doing this using CSS injection. Once you click on the browser action (extension icon next to the Omnibox in Chrome), you have to reload the Twitter page for the changes to take effect. 

I'll look into adding an AJAX component that refreshes part of the page that hides the user profile data automatically so you don't have to perform a refresh. I made this in an hour, to solve a problem of my own so I haven't refined the code. 

To install: 

1. Download the zip
2. Extract in a location you choose
3. Go to Chrome's Extensions tab (simply by typing chrome://extensions/ in the Omnibox) 
4. Check the Developer mode box in the top right corner
5. Click on Load Unpacked Extensions
6. Navigate to the folder where you extracted the zip - select the HideMe folder


Ignore the warning "background_page requires manifest version of 1 or lower."

You should see the HideMe button near your Omnibox. 
