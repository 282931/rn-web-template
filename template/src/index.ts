import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

import { AppRegistry } from "react-native";
import { Main } from "./Main";

AppRegistry.registerComponent("rnRNwebAllin", () => Main);

AppRegistry.runApplication("rnRNwebAllin", {
  rootTag: document.getElementById("root"),
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
