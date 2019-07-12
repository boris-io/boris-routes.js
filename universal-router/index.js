import UniversalRouter from 'universal-router';

class Boris {
  constructor(routes, opts) {
    const options = {
      errorHandler(error, context) {
        if (error.status === 404 && opts.NotFound) return opts.NotFound;
        return error;
      }
    }
    this._router = new UniversalRouter(routes, options);
    this._inited = false;
  }

  get i() {
    return this._router;
  }

  _render(container) {
    this._router.resolve(document.location.pathname)
    .then(html => {
      container.innerHTML = html;
      let event = new Event(`Router::mount::${document.location.pathname}`);
      window.dispatchEvent(event);
    })
  }

  init(container) {
    if (this._inited) return;
    this._inited = true;

    container = container || document.body;
    this._render(container);
    const self = this;

    window.addEventListener('popstate', function () {
      self._render(container);
    })

    document.addEventListener('click', function onClick (e) {
      let target = e.target;
      if (target && target.nodeName.toLowerCase() === 'a') {
        e.preventDefault();
        history.pushState(null, null, target.getAttribute('href'));
        self._render(container);
      }
    });
  }
}

export default Boris
