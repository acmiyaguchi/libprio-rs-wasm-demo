<script>
	import wasm from "../libprio-wasm/Cargo.toml";
	import { onMount } from "svelte";

	let x;
	onMount(async () => {
		let libprio = await wasm();
		x = libprio.client_encode_simple(
			[1, 1, 0, 1],
			"9lM6Y2z04Mc/0lgldM80wtwbuuzFQiHIN1qEwe21ax4=",
			"bR8oPSXlMtXfLTwrg/vJrB/VdwrknWB4Eza9KN+A+tY="
		);
	});
</script>

<main>
	<h1>Hello world</h1>
	<pre><code>{JSON.stringify(x, '', 2)}</code></pre>
</main>
