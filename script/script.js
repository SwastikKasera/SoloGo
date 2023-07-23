function scrollCards(direction) {
    const container = document.querySelector(".horizontal-scroll-container");
    const scrollAmount = 300; // Adjust the scroll amount as needed

    if (direction === "left") {
      container.scrollLeft -= scrollAmount;
    } else if (direction === "right") {
      container.scrollLeft += scrollAmount;
    }
  }