mod utils;

use prio::client;
use prio::encrypt;
use prio::field::Field32;
use prio::server;
use prio::util;
use serde::{Deserialize, Serialize};
use wasm_bindgen::prelude::*;

use utils::set_panic_hook;

extern crate base64;
extern crate ring;

use base64::encode;
use ring::{agreement, digest, rand};

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
extern "C" {
    // Use `js_namespace` here to bind `console.log(..)` instead of just
    // `log(..)`
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);
}

/// macro for debugging in the console...
macro_rules! console_log {
    // Note that this is using the `log` function imported above during
    // `bare_bones`
    ($($t:tt)*) => (log(&format_args!($($t)*).to_string()))
}

#[derive(Serialize, Deserialize)]
pub struct ClientShares {
    pub a: Vec<u8>,
    pub b: Vec<u8>,
}

#[derive(Serialize, Deserialize)]
pub struct Keypair {
    // The private key is the private scalar, which is used to derive the public
    // key.
    pub private: String,
    pub public: String,
}

const SEED_LEN: usize = 32;
const SCALAR_LEN: usize = 32;
/// Generated x25519 keypair where the private key is the seed
#[wasm_bindgen]
pub fn generate_keypair() -> JsValue {
    // first hash a seed value which we'll treat as the private key
    let rng = rand::SystemRandom::new();
    let seed: [u8; SEED_LEN] = rand::generate(&rng).unwrap().expose();
    let h = digest::digest(&digest::SHA512, &seed);
    let (private_scalar, _) = h.as_ref().split_at(SCALAR_LEN);

    let private_key = agreement::EphemeralPrivateKey::generate(
        &agreement::X25519,
        &ring::test::rand::FixedSliceRandom {
            // private key is the seed, which we can derive the rest of the keys
            bytes: &private_scalar,
        },
    )
    .unwrap();
    let public_key = private_key.compute_public_key().unwrap();
    let data = Keypair {
        private: encode([public_key.as_ref(), private_scalar].concat()).to_string(),
        public: encode(&public_key).to_string(),
    };
    JsValue::from_serde(&data).unwrap()
}

#[wasm_bindgen]
pub fn client_encode_simple(data: &[u32], public_key1: &str, public_key2: &str) -> JsValue {
    let pub_key1 = encrypt::PublicKey::from_base64(public_key1).unwrap();
    let pub_key2 = encrypt::PublicKey::from_base64(public_key2).unwrap();

    let data = data
        .iter()
        .map(|x| Field32::from(*x))
        .collect::<Vec<Field32>>();
    let encoded_shares = client::encode_simple(&data, pub_key1, pub_key2);
    assert_eq!(encoded_shares.is_ok(), true);
    let (a, b) = encoded_shares.unwrap();
    let shares = ClientShares { a: a, b: b };
    JsValue::from_serde(&shares).unwrap()
}

#[wasm_bindgen]
pub struct Server {
    this: server::Server<Field32>,
}

#[wasm_bindgen]
impl Server {
    /// A wasm wrapper for the rust core
    #[wasm_bindgen(constructor)]
    pub fn new(dimension: usize, is_first_server: bool, private_key: &str) -> Self {
        set_panic_hook();
        Server {
            this: server::Server::new(
                dimension,
                is_first_server,
                encrypt::PrivateKey::from_base64(private_key).unwrap(),
            ),
        }
    }

    pub fn choose_eval_at(&self) -> JsValue {
        JsValue::from_serde(&self.this.choose_eval_at()).unwrap()
    }

    pub fn generate_verification_message(&mut self, eval_at: u32, share: &[u8]) -> JsValue {
        set_panic_hook();
        let verification = self
            .this
            .generate_verification_message(eval_at.into(), share)
            .unwrap();
        console_log!("{:?}", verification);
        JsValue::from_serde(&verification).unwrap()
    }

    pub fn aggregate(&mut self, share: &[u8], v1: &JsValue, v2: &JsValue) -> JsValue {
        set_panic_hook();
        let v1: server::VerificationMessage<Field32> = v1.into_serde().unwrap();
        let v2: server::VerificationMessage<Field32> = v2.into_serde().unwrap();
        JsValue::from_serde(&self.this.aggregate(&share, &v1, &v2).unwrap()).unwrap()
    }

    pub fn total_shares(&self) -> JsValue {
        set_panic_hook();
        JsValue::from_serde(&self.this.total_shares()).unwrap()
    }
}

#[wasm_bindgen]
pub fn reconstruct_shares(share1: &JsValue, share2: &JsValue) -> JsValue {
    set_panic_hook();
    let share1: Vec<Field32> = share1.into_serde().unwrap();
    let share2: Vec<Field32> = share2.into_serde().unwrap();
    let reconstructed: Vec<u32> = util::reconstruct_shares(share1.as_ref(), share2.as_ref())
        .unwrap()
        .iter()
        .map(|el| u32::from(*el))
        .collect();
    JsValue::from_serde(&reconstructed).unwrap()
}
