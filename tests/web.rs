//! Test suite for the Web and headless browsers.

#![cfg(target_arch = "wasm32")]

extern crate wasm_bindgen_test;
use libprio_wasm::client_encode_simple;
use wasm_bindgen_test::*;

wasm_bindgen_test_configure!(run_in_browser);

#[wasm_bindgen_test]
fn pass() {
    let pub_key1 = "EpVlUydoH4LpYH9qbOzRHuGOeMGyJcVIBJkrDl7ZYEE=";
    let pub_key2 = "YkRYOPdAK7FJyD85MCvzDySXAZIGMTOoYuIfjVvWmdY=";
    let data_u32 = [0u32, 1, 0, 1, 1, 0, 0, 0, 1];
    let _res = client_encode_simple(&data_u32, pub_key1, pub_key2);
}
