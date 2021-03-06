// Replaces the element text with an array of spans
// and returns it
function splitTextInSpans(elem) {
  const letters = elem.textContent.split('');
  elem.innerHTML = '';
  return letters.map(letter => {
    const span = document.createElement('span');
    span.textContent = letter;
    elem.appendChild(span);
    return span;
  });
}

function intro() {
  function animateLogo(tl) {
    const maxWindowSize = Math.max(window.innerHeight, window.innerWidth);

    const squareDarkWrapper = document.querySelector('.square-dark-wrapper');
    const squareDark = squareDarkWrapper.querySelector('.square-dark');

    const square = document.querySelector('.square-wrapper');
    const lines = square.querySelectorAll('.line');

    const sparks = document.querySelectorAll('.spark');
    const outerCircle = document.querySelector('.outer-logo-circle .circle');
    const logo = document.querySelector('.pango-logo');

    tl.set(squareDark, {
      height: maxWindowSize,
      width: maxWindowSize }).

    set(lines, { scaleX: 0 });

    _.forEach(lines, (line, i) => {
      tl.to(lines[i], 2, {
        scaleX: 1,
        ease: 'Expo.easeOut' },
      i / 10);
    });

    tl.to(lines, .05, {
      opacity: 0 },
    1).
    to(squareDarkWrapper, 1.5, {
      scale: 1.4,
      ease: 'Expo.easeOut' },
    1).
    to(square, 2, {
      rotationZ: 45,
      ease: 'Expo.easeOut' },
    1.5).
    to(sparks, 1, {
      strokeDashoffset: 0,
      ease: 'Expo.easeOut' },
    1.5).
    to(sparks, 1, {
      strokeDashoffset: 145,
      ease: 'Expo.easeOut' },
    1.5).
    to(outerCircle, 1.4, {
      strokeDashoffset: 0,
      ease: 'Expo.easeInOut' },
    1.7).
    to(outerCircle, .4, {
      opacity: 0,
      ease: 'Power4.easeOut' },
    2.7).
    to(logo, 1, {
      opacity: 1,
      scale: 1,
      ease: 'Power4.easeOut' },
    2.7);

    return tl;
  }

  function animateWords(tl) {
    const wordsWrapper = document.querySelector('.pango-words');
    const words = wordsWrapper.querySelectorAll('.pango-word');
    const lineSeparator = wordsWrapper.querySelector('.line-separator');

    tl.set(lineSeparator, { scaleX: 0 }).
    to(lineSeparator, 1, {
      scaleX: 1,
      ease: 'Expo.easeOut' },
    3);

    _.forEach(words, word => {
      const spans = splitTextInSpans(word);
      _.forEach(spans, (span, j) => {
        let tlWords = new TimelineMax();

        tlWords.set(span, { y: span.clientHeight, opacity: 1 });
        const delay = (3 + Math.abs(spans.length / 2 - j) / 20).toFixed(2);
        tlWords.to(span, 1.4, {
          y: 0,
          ease: 'Expo.easeOut' },
        delay);
      });
    });
    return tl;
  }

  function animateBackground(tl) {
    const wrapper = document.querySelector('.bg-lines-wrapper');
    const createLines = qty => {
      for (let i = 0; i < qty; i++) {
        const line = document.createElement('div');
        line.classList.add('line');
        wrapper.appendChild(line);
        tl.set(line, {
          x: _.random(window.innerWidth),
          y: _.random(window.innerHeight),
          z: _.random(-200, 200),
          width: _.random(0, 100) + 50,
          scaleX: 0 });

      }
    };

    function animateLines(lines) {
      for (let line of lines) {
        const startTime = _.random(5, true);
        tl.to(line, .4, {
          scaleX: 1,
          ease: 'Expo.Power4' },
        startTime).
        to(line, 2, {
          scaleX: 0,
          x: '+=' + line.style.width,
          ease: 'Power4.easeOut' },
        startTime + .4);
      }

      // 3d rotation
      const rotate = (rx, ry) => {
        TweenMax.to(wrapper, .75, {
          rotationX: ry,
          rotationY: rx,
          ease: 'Power0.easenone' });

      };

      // update rotation values
      function update(elem, event, tilt) {
        if (tilt) {
          const tiltLR = event.gamma;
          const tiltFB = event.beta;
          rotate(tiltLR / 1.5, tiltFB / 1.5);

          return;
        }

        const xpos = event.layerX || event.offsetX;
        const ypos = event.layerY || event.offsetY;

        const ax = -(window.innerWidth / 2 - xpos) / 40;
        const ay = (window.innerHeight / 2 - ypos) / 10;
        rotate(ax, ay);
      }

      // get element for mousemove event tracking
      // on top of all other layers
      const trackerLayer = document.querySelector('.mouse-tracker-layer');
      trackerLayer.addEventListener('mousemove', e => window.requestAnimationFrame(() => update(wrapper, e)));

      if (window.DeviceOrientationEvent) {
        window.addEventListener('deviceorientation', (e) =>
        window.requestAnimationFrame(() => update(wrapper, e, true)));
      }
    }

    createLines(50);
    animateLines(wrapper.querySelectorAll('.line'));
  }

  return {
    animateLogo,
    animateWords,
    animateBackground };

}

/*intro().animateBackground(new TimelineMax({
    delay: 2.8,
    repeat: -1,
    repeatDelay: 0
  }))*/
intro().animateLogo(new TimelineMax());
intro().animateWords(new TimelineMax());