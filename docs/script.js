document.documentElement.classList.add("js");

const sections = [...document.querySelectorAll("[data-section]")];
const tocLinks = [...document.querySelectorAll(".toc a")];

const sectionObserver = new IntersectionObserver(
  entries => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      }
    }
  },
  {
    threshold: 0.18,
    rootMargin: "0px 0px -8% 0px"
  }
);

sections.forEach(section => sectionObserver.observe(section));

const navObserver = new IntersectionObserver(
  entries => {
    const visible = entries
      .filter(entry => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;

    const id = visible.target.id;
    tocLinks.forEach(link => {
      const isCurrent = link.getAttribute("href") === `#${id}`;
      link.classList.toggle("current", isCurrent);
    });
  },
  {
    threshold: [0.3, 0.6, 0.9],
    rootMargin: "-10% 0px -55% 0px"
  }
);

sections.forEach(section => navObserver.observe(section));

const ambient = document.querySelector(".ambient");
if (ambient) {
  const jitter = () => {
    const opacity = 0.3 + Math.random() * 0.08;
    ambient.style.opacity = opacity.toFixed(2);
  };

  setInterval(jitter, 2400);
}
