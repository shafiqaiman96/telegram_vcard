# telegram_vcard
Generate vcard for telegram json contact. 
PURPOSE: To fix phone contact sync Telegram contact without phone number.

1. Prepare node.js environment
2. Clone project https://github.com/shafiqaiman96/telegram_vcard.git
3. Extract and open project folder
4. Run "npm install vcards-js --save"
5. Open telegram desktop > setting > advanced > export telegram data 
6. Tick contact list and Human-Readable JSON, untick others
7. Click export
8. Open path in Download/Telegram Desktop
9. Copy result.json to project folder
10. Run "node index.js"
11. OPTIONAL: Uncommend line 48 to get separte contact list

Thank You
