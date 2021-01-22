//! Test suite for the Web and headless browsers.

#![cfg(target_arch = "wasm32")]

extern crate wasm_bindgen_test;
use wasm_bindgen_test::*;
use libprio_wasm::client_encode_simple;

wasm_bindgen_test_configure!(run_in_browser);

#[wasm_bindgen_test]
fn pass() {
    let pub_key1 =
        "BIl6j+J6dYttxALdjISDv6ZI4/VWVEhUzaS05LgrsfswmbLOgNt9HUC2E0w+9RqZx3XMkdEHBHfNuCSMpOwofVQ=";
    let pub_key2 =
        "BNNOqoU54GPo+1gTPv+hCgA9U2ZCKd76yOMrWa1xTWgeb4LhFLMQIQoRwDVaW64g/WTdcxT4rDULoycUNFB60LE=";
    let data_u32 = [0u32, 1, 0, 1, 1, 0, 0, 0, 1];
    let res = client_encode_simple(&data_u32, pub_key1, pub_key2);
}
