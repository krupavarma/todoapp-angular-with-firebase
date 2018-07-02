// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: "AIzaSyCkGjHiIEUxeIrISbFACdqGEuWAkWy00dw",
    authDomain: "todo-a1fa0.firebaseapp.com",
    databaseURL: "https://todo-a1fa0.firebaseio.com",
    projectId: "todo-a1fa0",
    storageBucket: "todo-a1fa0.appspot.com",
    messagingSenderId: "114205474389"
  }
};
