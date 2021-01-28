const faqAccordion = () => {
  const quBlock = document.querySelector(`.accordion`);

  if (quBlock) {

    const blocksServices = quBlock.querySelectorAll(`.accordion__item`);

    for (const block of blocksServices) {

      block.classList.add(`accordion--js`);
      const t = function (n) {
        let i, r = !1, o = 100;
        function s() {
          if (new Date - i < o) {
            setTimeout(s, o);

          } else {
            r = !1;
            const e = n.target.parentElement.querySelector(`.accordion__answer-wrapper`);
            const t = e.scrollHeight + `px`;
            const button = n.target;
            e.classList.toggle(`open`);

            if (!e.classList.contains(`open`)) {
              e.setAttribute(`aria-hidden`, `false`);
              button.setAttribute(`aria-expanded`, `false`);
            } else {
              e.setAttribute(`aria-hidden`, `true`);
              button.setAttribute(`aria-expanded`, `true`);
            }

            e.style.height = 0 === e.offsetHeight ? 0 : t;
          }
        }

        window.addEventListener(`resize`, function () {
          i = new Date;
          !1 === r && (r = !0, setTimeout(s, o));
        }, !1);

        const e = n.target.parentElement.querySelector(`.accordion__answer-wrapper`);
        const t = e.scrollHeight + `px`;
        const button = n.target;
        e.classList.toggle(`open`);

        if (!e.classList.contains(`open`)) {
          e.setAttribute(`aria-hidden`, `false`);

          button.setAttribute(`aria-expanded`, `false`);
        } else {
          e.setAttribute(`aria-hidden`, `true`);
          button.setAttribute(`aria-expanded`, `true`);
        }

        e.style.height = 0 === e.offsetHeight ? t : 0;
      };
      const n = block.querySelectorAll(`.accordion__question`);

      n.forEach(function (e) {
        e.addEventListener(`click`, t);
      });
    }
  }
};

export {faqAccordion};
