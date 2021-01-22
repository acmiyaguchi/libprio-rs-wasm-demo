mod utils;

use prio::client;
use prio::encrypt;
use prio::finite_field;
use serde::{Deserialize, Serialize};
use wasm_bindgen::prelude::*;
use wasm_bindgen::prelude::*;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet() {
    alert("Hello, libprio-wasm!");
}

#[derive(Serialize, Deserialize)]
pub struct ClientShares {
    pub a: Vec<u8>,
    pub b: Vec<u8>,
}

#[wasm_bindgen]
pub fn client_encode_simple(data: &[u32], public_key1: &str, public_key2: &str) -> JsValue {
    let pub_key1 = encrypt::PublicKey::from_base64(public_key1).unwrap();
    let pub_key2 = encrypt::PublicKey::from_base64(public_key2).unwrap();

    let data = data
        .iter()
        .map(|x| finite_field::Field::from(*x))
        .collect::<Vec<finite_field::Field>>();
    let encoded_shares = client::encode_simple(&data, pub_key1, pub_key2);
    let (a, b) = encoded_shares.unwrap();
    let shares = ClientShares { a: a, b: b };
    JsValue::from_serde(&shares).unwrap()
}
