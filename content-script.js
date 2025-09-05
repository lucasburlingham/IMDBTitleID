// put a button next to every a that includes https://www.imdb.com/title/tt/ that copies the tt* to the clipboard
// that also has the class ipc-title-link-wrapper
const links = document.querySelectorAll("a.ipc-title-link-wrapper[href*='/title/tt']:not([href*='/episodes/']):not([href*='/videogallery/']):not([href*='/mediaviewer/']):not([href*='/fullcredits/']):not([href*='/reviews/']):not([href*='/faq/']):not([href*='/technical/']), a.ipc-poster-card__title");

// Add button next to each link
links.forEach((link) => {
	const match = link.href.match(/tt\d+/);
	if (match) {
		const button = document.createElement("button");
		button.textContent = "Copy IMDB ID";
		button.style.fontFamily = "Roboto, Helvetica, Arial, sans-serif";
		button.style.fontSize = "1rem";
		button.style.marginLeft = "0.5em";
		button.style.padding = "0.2em 0.5em";
		button.style.backgroundColor = "#f5c518";
		button.style.border = "none";
		button.style.borderRadius = "4px";
		button.style.cursor = "pointer";
		button.addEventListener("click", (e) => {
			e.preventDefault();
			navigator.clipboard.writeText(match[0]);
			button.textContent = "Copied!";

			// Reset button text after 5 seconds
			sleep(5000).then(() => {
				button.textContent = "Copy Current IMDB ID";
			});
		});
		link.parentNode.insertBefore(button, link.nextSibling);
	}
});


// Grab the current id from the url and add a button to the top of the page
const currentId = window.location.href.match(/tt\d+/);
if (currentId) {
	const button = document.createElement("button");
	button.textContent = "Copy Current IMDB ID";
	button.style.fontFamily = "Roboto, Helvetica, Arial, sans-serif";
	button.style.fontSize = "1rem";
	button.style.marginLeft = "0.5em";
	button.style.padding = "0.2em 0.5em";
	// I didn't see anything about this color being trademarked by Amazon or IMDB, so I'm using it. It's just a color anyways.
	button.style.backgroundColor = "#f5c518";
	button.style.border = "none";
	button.style.borderRadius = "4px";
	button.style.cursor = "pointer";
	button.addEventListener("click", (e) => {
		e.preventDefault();
		navigator.clipboard.writeText(currentId[0]);
		button.textContent = "Copied!";

		// Reset button text after 5 seconds
		sleep(5000).then(() => {
			button.textContent = "Copy Current IMDB ID";
		});

		document.body.insertBefore(button, document.body.firstChild);
	});
}