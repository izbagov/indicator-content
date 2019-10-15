class IndicatorContent {
  constructor(options) {
    this.$body = document.body;
    this.options = options;
    this.createBar();
    this.init();
  }

  init() {
    this.appendBar();

    document.addEventListener('scroll', () => {
      let scrollPercent = this.getScrollPercent().toFixed();

      this.update(scrollPercent);
    });
  }

  update(percent) {
    this.$bar.style.width = `${percent}%`;
  }

  createBar() {
    let bar = document.createElement('div');
    bar.className = 'ic-progress';

    if (this.options) {
      if (this.options.color) {
        bar.style.backgroundColor = this.options.color;
      }

      if (this.options.height) {
        bar.style.height = `${this.options.height}px`;
      }
    }

    this.$bar = bar;
  }

  appendBar() {
    document.body.appendChild(this.$bar);
  }

  getScrollPercent() {
    let h = document.documentElement,
      b = this.$body,
      st = 'scrollTop',
      sh = 'scrollHeight';
    return ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
  }
}

new IndicatorContent({
  color: '#4CAF50'
});
