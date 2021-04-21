<script>
	import base64js from "base64-js";
	import "bootstrap/dist/css/bootstrap.min.css";

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
	$: server_a = new libprio.Server(dimension, true, keypair_a.private);
	$: server_b = new libprio.Server(dimension, false, keypair_b.private);
	$: eval_at = server_a.choose_eval_at();
	$: verifyA = server_a.generate_verification_message(
		eval_at,
		new Uint8Array(encoded.a)
	);
	$: verifyB = server_b.generate_verification_message(
		eval_at,
		new Uint8Array(encoded.b)
	);
	$: server_a.aggregate(new Uint8Array(encoded.a), verifyA, verifyB);
	$: server_b.aggregate(new Uint8Array(encoded.b), verifyB, verifyA);
	$: shareA = server_a.total_shares();
	$: shareB = server_b.total_shares();
	$: reconstructed = libprio.reconstruct_shares(shareA, shareB);
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
		See the
		<a href="https://github.com/acmiyaguchi/libprio-rs-wasm-demo">source for
			this page on Github.</a>
	</p>

	<h2>Keys</h2>
	<p>
		The private key is the "private scalar" derived from a random seed. This
		value is used as a deterministic seed in the key-exchange protocol i.e.
		ECIES with a X9.63 key derivation function and AES-GCM for symmetric
		encryption. The public key is derived from the private scalar. The keys
		are base64-encoded. This should be cleaned up to match the original
		library, which appends the public key to the private key to avoid extra
		work.
	</p>

	<p>
		X25519 is used over ECDSA P-256 algorithm because the underlying
		cryptography library (ring) does not support the latter on wasm32
		targets.
	</p>

	<div class="row">
		<div class="col-sm">
			<h3>Server A</h3>
			<label>Private Key
				<input bind:value={keypair_a.private} readonly />
			</label>
			<label>Public Key
				<input bind:value={keypair_a.public} readonly />
			</label>
		</div>
		<div class="col-sm">
			<h3>Server B</h3>
			<label>Private Key
				<input bind:value={keypair_b.private} readonly />
			</label>
			<label>Public Key
				<input bind:value={keypair_b.public} readonly />
			</label>
		</div>
	</div>

	<h2>Client Encoding</h2>

	<p>
		Only bit-vector encodings are supported by libprio-rs at the time of
		writing. Prio can support a variety of aggregatable functions including
		linear regression and count-min.
	</p>

	<h3>Original Data</h3>
	<textarea bind:value={data} readonly />

	<div class="row">
		<div class="col-sm">
			<h3>Shares for server A</h3>
			<h4>encrypted share</h4>
			<p>{encoded.a.length} bytes</p>
			<textarea bind:value={encoded.a} readonly />
			<textarea readonly>{base64js.fromByteArray(encoded.a)}</textarea>
			<h4>decrypted share</h4>
			<textarea
				readonly>{base64js.fromByteArray(libprio.decrypt_share(encoded.a, keypair_a.private))}</textarea>
		</div>
		<div class="col-sm">
			<h3>Shares for server B</h3>
			<h4>encrypted share</h4>
			<p>{encoded.b.length} bytes</p>
			<textarea bind:value={encoded.b} readonly />
			<textarea readonly>{base64js.fromByteArray(encoded.b)}</textarea>
			<h4>decrypted share</h4>
			<textarea
				readonly>{base64js.fromByteArray(libprio.decrypt_share(encoded.b, keypair_b.private))}</textarea>
		</div>
	</div>

	<h2>Server Verification</h2>
	<h3>Polynomial for evaluation (chosen by server A)</h3>
	{server_a.choose_eval_at()}

	<div class="row">
		<div class="col-sm">
			<h3>Verification for server A</h3>
			<pre>{JSON.stringify(verifyA, '', 2)}</pre>
		</div>
		<div class="col-sm">
			<h3>Verification for server B</h3>
			<pre>{JSON.stringify(verifyB, '', 2)}</pre>
		</div>
	</div>

	<h2>Reconstruction</h2>

	<div class="row">
		<div class="col-sm">
			<h3>Total shares for server A</h3>
			<pre>{JSON.stringify(shareA, '', 2)}</pre>
		</div>
		<div class="col-sm">
			<h3>Total shares for server B</h3>
			<pre>{JSON.stringify(shareB, '', 2)}</pre>
		</div>
	</div>

	<h3>Reconstructed value</h3>
	<p>{reconstructed.length} bytes</p>
	<textarea bind:value={reconstructed} readonly />
</main>
