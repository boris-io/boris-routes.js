import UniversalRouter from 'universal-router';

class Boris {
  constructor(...args) {
    this._router = new UniversalRouter(...args);
  }

  get i() {
    return this._router;
  }

  init(container) {
    container = container || document.body;
    this._router.resolve(document.location.pathname)
    .then(html => {
      container.innerHTML = html;
    })
  }
}

export default Boris
