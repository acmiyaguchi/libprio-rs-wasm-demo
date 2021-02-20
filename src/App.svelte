<script>
	import wasm from "../libprio-wasm/Cargo.toml";
	import { onMount } from "svelte";

	let encoded = {};
	let keypair_a = {};
	let keypair_b = {};
	let data = [1, 1, 0, 1];
	onMount(async () => {
		let libprio = await wasm();
		keypair_a = libprio.generate_keypair();
		keypair_b = libprio.generate_keypair();
		encoded = libprio.client_encode_simple(
			data,
			"9lM6Y2z04Mc/0lgldM80wtwbuuzFQiHIN1qEwe21ax4=",
			"bR8oPSXlMtXfLTwrg/vJrB/VdwrknWB4Eza9KN+A+tY="
		);
	});

	$: encodedA = btoa(new Int8Array(encoded.a));
	$: encodedB = btoa(new Int8Array(encoded.b));
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
	</p>
	<h3>Server A</h3>
	<label>Private Key
		<input bind:value={keypair_a.private} readonly />
	</label>
	<label>Public Key <input bind:value={keypair_a.public} readonly /> </label>
	<h3>Server B</h3>
	<label>Private Key
		<input bind:value={keypair_b.private} readonly />
	</label>
	<label>Public Key <input bind:value={keypair_b.public} readonly /> </label>
	{#if Object.keys(encoded).length}
		<h2>Client Encode Simple</h2>
		<h3>Original Data</h3>
		<textarea bind:value={data} readonly />

		<h3>Shares for server A</h3>
		<p>{encoded.a.length} bytes</p>
		<textarea bind:value={encodedA} readonly />

		<h3>Shares for server B</h3>
		<p>{encoded.b.length} bytes</p>
		<textarea bind:value={encodedB} readonly />
	{/if}
</main>
