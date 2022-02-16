# darkmode
A tiny script for listening to and overriding the dark style preference on a website.

## How does it work
The script initializes two eventListeners. One of them checks the user preference regarding dark mode, while the other checks if a toggle element (in this case, a checkbox) overrides said preference.

## How to use it
1) Add the JS script to your page.
2) Add a set of CSS variables under the selector `[data-theme="dark"]`. These will be the dark mode styles.
3) Add a checkbox or another input element to the page and set its id.
4) Hook the id of the input element on the script and change how its value is read, if necessary.

## In this repo
You'll find a bare-minimum implementation on a basic HTML file.
