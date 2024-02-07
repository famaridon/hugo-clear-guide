// add funtion to document ready
document.addEventListener("DOMContentLoaded", async () => {
  // look for data-gc-search-input and add event to run search function when the user types debounsing the search
  const searchInput = document.querySelector("[data-gc-search-input]");
  const searchResults = document.querySelector("[data-gc-search-results]");
  var searchModal = document.getElementById('searchModal')

  searchModal.addEventListener('shown.bs.modal', () => {
    searchInput.focus();
  });

  if (searchInput) {
    searchInput.addEventListener("keyup", async () => {
      const results = await search(searchInput.value);
      searchResults.innerHTML = "";
          results.forEach((result) => {
            const doc = window.searchData[result.ref];
            const link = document.createElement("a");
            link.classList.add("list-group-item");
            link.href = doc.uri;
            link.innerText = doc.title;
            searchResults.appendChild(link);
          });
    });
  }
});

// search funtion using lunr.js
const search = async (query) => {
  // check if the search index is not loaded
  if (!window.searchIndex) {
    // load the search index
    const response = await fetch("/index.json");
    window.searchData = await response.json();
    window.searchIndex = lunr(function () {
      this.ref("id");
      this.field("title");
      this.field("content");
      this.field("tags");
      this.field("uri");
      window.searchData.forEach((doc, index) => {
        this.add({...doc, id: index});
      });
    });
  }
  // search the index
  return window.searchIndex.search(query);
};
