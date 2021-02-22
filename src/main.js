import App from "./App.svelte";
import wasm from "../libprio-wasm/Cargo.toml";

let init = async () =>
  new App({
    target: document.body,
    props: {
      libprio: await wasm(),
    },
  });

init();
