// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyB6RQIC3sV1IqI3LWpn5YmbcK5dHsxx2SQ",
    authDomain: "planning-poker-e52db.firebaseapp.com",
    databaseURL: "https://planning-poker-e52db.firebaseio.com",
    projectId: "planning-poker-e52db",
    storageBucket: "planning-poker-e52db.appspot.com",
    messagingSenderId: "695265433218"
  }
};
