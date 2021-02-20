mod utils;

use prio::client;
use prio::encrypt;
use prio::finite_field;
use serde::{Deserialize, Serialize};
use wasm_bindgen::prelude::*;

extern crate base64;
extern crate ring;
extern crate serde_json;

use base64::encode;
use ring::signature::KeyPair;
use ring::{rand, signature};
use serde_json::json;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[derive(Serialize, Deserialize)]
pub struct ClientShares {
    pub a: Vec<u8>,
    pub b: Vec<u8>,
}

#[derive(Serialize, Deserialize)]
pub struct Keypair {
    pub private: String,
    pub public: String,
}

/// Generated x25519 keypair
#[wasm_bindgen]
pub fn generate_keypair() -> JsValue {
    let rng = rand::SystemRandom::new();
    let pkcs8_bytes = signature::Ed25519KeyPair::generate_pkcs8(&rng).unwrap();
    let key_pair = signature::Ed25519KeyPair::from_pkcs8(pkcs8_bytes.as_ref()).unwrap();
    let peer_public_key_bytes = key_pair.public_key().as_ref();
    let data = Keypair {
        private: encode(&pkcs8_bytes).to_string(),
        public: encode(&peer_public_key_bytes).to_string(),
    };
    JsValue::from_serde(&data).unwrap()
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
    assert_eq!(encoded_shares.is_some(), true);
    let (a, b) = encoded_shares.unwrap();
    let shares = ClientShares { a: a, b: b };
    JsValue::from_serde(&shares).unwrap()
}
