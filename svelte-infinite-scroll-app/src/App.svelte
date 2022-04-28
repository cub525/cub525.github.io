<script>
	import PostCard from "./components/PostCard.svelte";
	import axios from "axios";
	import { onMount } from "svelte";
	// For some reasons import { inview } from "svelte-inview"; creates some issues
	import { inview } from "svelte-inview/dist/index";

	let posts = []; // The posts we'll fetch with axios
	let page = 1; // We'll increment this when fetching more data
	const PAGE_SIZE = 6; // The number of post we get per fetch
	let hasMore = true; // We'll check if there are more posts to get. JSON Placeholder has a limit of 100 posts

	// We'll use this function for the initial fetch when the component is mounted. as well as addition fetches on scroll
	const fetchData = async (page) => {
		// Some template litterals for the fetch query
		let queryURL = "./songs.json";

		let res = await axios
			.get(queryURL)
			// Await had cool error handling too 😎!, no need to use try catch all over the place 😀
			.catch((err) =>
				console.log(`😞 Something went terribly wrong: ${err.message}`)
			);

		// If we were able to get more posts, add them to our posts array
		if (res.data.length > 0) posts = [...posts, ...res.data];
		// Otherwise we'll know we've reached the end of results
		else hasMore = false;
	};

	onMount(async () => {
		// At the initial fetch, the page is set to 1 in order to get the very first posts.
		fetchData(page);
	});

	// Will be called when we've scrolled to the pont where more data needs to be fetched
	const handleChange = (e) => {
		// To get more results, we'll increment the page by 1
		page++;
		// And fetch more data
		if (e.detail.inView && hasMore) fetchData(page);
	};
</script>

<div class="container">
	<h1>SVELTE INFINITE SCROLLING 🔥</h1>

	{#if posts}
		{#each posts as post (post.id)}
			<PostCard {...post} />
		{:else}
			<div>404 — 😞 No Posts Found</div>
		{/each}
	{/if}

	<!-- This component is place RIGHT BELOW the last post fetched. handleChange will be triggered
	as soon as it appears on frame. We'll use this info to know when to fetch more data  -->
	<div use:inview={{}} on:change={handleChange} />

	<!-- If there's nothing more to fetch, we have to let the user know that -->
	{#if !hasMore}
		<h1>—— No more of results ——</h1>
	{/if}
</div>

<!-- Some generic styles. Pretty UI isn't the focus of this guide -->
<style>
	.container {
		max-width: 750px;
		padding: 25px;
		margin: auto;
	}
</style>
