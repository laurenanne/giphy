async function getGiphy(tag) {
  const res = await axios.get("https://api.giphy.com/v1/gifs/random", {
    params: {
      api_key: "AGvJdvg5qIs6QBb1aDerIIkqLumIl0sM",
      tag,
    },
  });
  const imgUrl = res.data.data.images.original.url;
  const div = document.querySelector("#gif-spot");
  const img = document.createElement("img");
  img.setAttribute("src", `${imgUrl}`);
  div.append(img);
}

//Grab the button from HTML code and add an event listener
const btnSearch = document.querySelector("#btn-search");
btnSearch.addEventListener("click", function (e) {
  const searchInput = document.querySelector("#searchGiphy");
  const tagGiphy = searchInput.value;
  getGiphy(tagGiphy);
  //reset the search field value
  searchInput.value = "";
});

//grab button from HMTL code and add an even listener
const btnRemove = document.querySelector("#btn-remove");
btnRemove.addEventListener("click", function (e) {
  // set the innerHTML of the div to blank to remove the gifs
  const div = document.querySelector("#gif-spot");
  div.innerHTML = "";
});
