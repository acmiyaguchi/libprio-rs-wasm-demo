<script>
	import base64js from "base64-js";

	// allow the component to be completely reactive by resolving the wasm module
	// before passing it to the component
	export let libprio;

	let data = [1, 1, 0, 1];
	let dimension = 4;

	$: keypair_a = libprio.generate_keypair();
	$: keypair_b = libprio.generate_keypair();
	$: encoded = libprio.client_encode_simple(
		data,
		keypair_a.public,
		keypair_b.public
	);
	$: encodedA = base64js.fromByteArray(encoded.a);
	$: encodedB = base64js.fromByteArray(encoded.b);
	$: server_a = new libprio.Server(dimension, true, keypair_a.private);
	$: server_b = new libprio.Server(dimension, false, keypair_b.private);
	$: eval_at = server_a.choose_eval_at();
	$: verifyA = server_a.generate_verification_message(
		eval_at,
		base64js.toByteArray(encodedA)
	);
	$: verifyB = server_b.generate_verification_message(
		eval_at,
		base64js.toByteArray(encodedB)
	);
</script>

<style>
	main {
		color: #333;
		margin: 1em;
		padding: 8px;
		box-sizing: border-box;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
			Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
	}

	label {
		display: block;
	}

	input,
	textarea {
		font-family: inherit;
		font-size: inherit;
		-webkit-padding: 0.4em 0;
		padding: 0.4em;
		margin: 0 0 0.5em 0;
		box-sizing: border-box;
		border: 1px solid #ccc;
		border-radius: 2px;
	}

	input,
	textarea {
		width: 100%;
	}
</style>

<main>
	<h1>libprio-rs wasm demonstration</h1>

	<p>
		See
		<a
			href="https://github.com/abetterinternet/libprio-rs">abetterinternet/libprio-rs</a>
		for the source library that has been compiled to wasm32-unknown-unknown.
	</p>

	<h2>Keys</h2>
	<p>
		The keys are generated via X25519 instead of the original ECDH P-256
		algorithm because the underlying cryptography library (ring) does not
		support the latter on wasm32 targets. Keys are base64-encoded DER keys.
		OpenSSL has difficulty generating keys that are compatible with this
		library.
	</p>

	<p>
		The private key is the "private scalar" derived from a random seed. This
		value is used as a deterministic seed in the key-exchange protocol i.e.
		IECES with a X9.63 key derivation function and AES-GCM for symmetric
		encryption.
	</p>

	<h3>Server A</h3>
	<label>Private Key
		<input bind:value={keypair_a.private} readonly />
	</label>
	<label>Public Key <input bind:value={keypair_a.public} readonly /> </label>

	<h3>Server B</h3>
	<label>Private Key
		<input bind:value={keypair_a.private} readonly />
	</label>
	<label>Public Key <input bind:value={keypair_b.public} readonly /> </label>

	<h2>Client Encode Simple</h2>

	<h3>Original Data</h3>
	<textarea bind:value={data} readonly />

	<h3>Shares for server A</h3>
	<p>{encoded.a.length} bytes</p>
	<textarea bind:value={encodedA} readonly />

	<h3>Shares for server B</h3>
	<p>{encoded.b.length} bytes</p>
	<textarea bind:value={encodedB} readonly />

	<h2>Server Verification</h2>
	<h3>Polynomial for evaluation (chosen by server A)</h3>
	{server_a.choose_eval_at()}

	<h3>Verification for server A</h3>
	<pre>{JSON.stringify(verifyA, '', 2)}</pre>

	<h3>Verification for server B</h3>
	<pre>{JSON.stringify(verifyB, '', 2)}</pre>
</main>
