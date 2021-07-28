(() => {
  // const icons = document.querySelectorAll(".iconContainer"),
  let waterBox = document.querySelector(".miniIconBoxWater"),
      barleyBox = document.querySelector(".miniIconBoxBarley"),
      hopBox = document.querySelector(".miniIconBoxHop"),
      yeastBox = document.querySelector(".miniIconBoxYeast");
  const lBox = document.querySelector(".lightbox"),
        lbClose = lBox.querySelector(".close-button"),
        infoHeader = document.querySelector(".infoHeader"),
        beerInfo = document.querySelector(".beerInfo");

  //store beer info headers
  const beerData = [
    ["Water", `We use pure water from ancient aquifers, deep lakes and Rocky Mountain springs to make a more refreshing beer.`],
    ["Barley", `We use spring and winter barley varieties to keep your beer fresh all year. Our barley is purchased direcly from the organic barley producers in Ontario.`],
    ["Hop",`Our "Citra" hops come from Washington. Tasting notes are primarily lemon and grass, with some other lightly sweet flavors thrown into the mix like lime and melon. Citra is fresh, light and sweet.`],
    ["Yeast", `Brewing yeast is the most essential of the four beer ingredients. Without it, we would just have bitter grain water that never fermented. We know that the correct strain of brewing yeast it critical to a perfect fermentation that's why we carry a wide variety of lager yeast from organic yeast producers in Ontario.`],
  ]



  function popLightBox() {
    showInfo(this.dataset.offset);
    lBox.classList.add('show-lightbox');

  }

  function showInfo(targetIndex) {
    infoHeader.textContent = beerData[targetIndex][0];
    beerInfo.textContent = beerData[targetIndex][1];

  }
  function closeLightBox() {
    lBox.classList.remove('show-lightbox');
  }

  waterBox.addEventListener("click", popLightBox);
  barleyBox.addEventListener("click", popLightBox);
  hopBox.addEventListener("click", popLightBox);
  yeastBox.addEventListener("click", popLightBox);

  lbClose.addEventListener("click", closeLightBox);



})();
