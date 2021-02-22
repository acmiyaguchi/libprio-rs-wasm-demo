extern crate ring;
extern crate base64;
extern crate serde_json;

use base64::encode;
use ring::{rand, signature};
use ring::signature::KeyPair;
use serde_json::json;

fn main() {
    let rng = rand::SystemRandom::new();
    let seed: [u8; 32] = rand::generate(&rng).unwrap().expose();
    let key_pair = signature::Ed25519KeyPair::from_seed_unchecked(&seed).unwrap();
    let peer_public_key_bytes = key_pair.public_key().as_ref();
    let data = json!({
        "seed": encode(seed).to_string(),
        "public": encode(&peer_public_key_bytes).to_string(),
    });
    println!("{}", data);
}
