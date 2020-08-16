# PhoneWords backend

To run backend simply do:
```bash
$ npm install
$ npm start
```

the app will be served on `http://localhost:3001`.

Code quality can be assessed with `eslint`
```bash
$ npm run eslint
```

Predictions can be retrieved by sending a GET request to `/predictions/:number`, e.g.  `GET http://localhost:3001/predictions/228` will respond with
```json
["ACT","BAT","CAT"]
```
