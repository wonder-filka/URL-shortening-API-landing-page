let form = document.querySelector("#searchForm");
let label = document.querySelector("#labelSearch");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  let inputUser = document.querySelector("#inputSearch");
  getData(inputUser.value);
}

function getData(link) {
  if (link != 0) {
    label.innerHTML = ``;
    let apiUrl = `https://api.shrtco.de/v2/shorten?url=${link}`;
    axios.get(apiUrl).then(showResult);
  } else {
    label.innerHTML = `Please add a link`;
  }
}

function showResult(response) {
  let result = document.querySelector("#result");
  let resultWrap = '<div class="resultWrap">';
  let originLink = response.data.result.original_link;
  let shortLinks = [
    response.data.result.short_link,
    response.data.result.short_link2,
    response.data.result.short_link3,
  ];

  shortLinks.forEach(function (elem) {
    resultWrap =
      resultWrap +
      `<div class="resultItem">
                    <div class="link">${originLink}</div>
                    <div class="newLink"> ${elem}</div>
                    <button type="button" class="btn copy">Copy</button>
                </div>`;
  });

  resultWrap = resultWrap + `</div>`;
  result.innerHTML = resultWrap;

  let resultItem = document.querySelectorAll(".resultItem");
  resultItem.forEach(function (item) {
    let itemCopy = item.querySelector(".copy");

    itemCopy.addEventListener("click", copied);
    function copied(event) {
      event.preventDefault();
      let newLink = item.querySelector(".newLink");
      let newLinkCopy = newLink.textContent;
      navigator.clipboard.writeText(newLinkCopy);
      itemCopy.classList.add("btnAterClick");
      console.log(newLinkCopy);
      itemCopy.innerText = "Copied!";
    }
  });
}
