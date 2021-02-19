extern crate ring;
extern crate base64;
extern crate serde_json;

use base64::encode;
use ring::{rand, signature};
use ring::signature::KeyPair;
use serde_json::json;

fn main() {
    let rng = rand::SystemRandom::new();
    let pkcs8_bytes = signature::Ed25519KeyPair::generate_pkcs8(&rng).unwrap();
    let key_pair = signature::Ed25519KeyPair::from_pkcs8(pkcs8_bytes.as_ref()).unwrap();
    let peer_public_key_bytes = key_pair.public_key().as_ref();
    let data = json!({
        "private": encode(&pkcs8_bytes),
        "public": encode(&peer_public_key_bytes)
    });
    println!("{}", data);
}
