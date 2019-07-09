import UniversalRouter from './universal-router';

class Boris {
  routes(...args) {
    return function (...args) {
      return new UniversalRouter(...args);
    }
  }
}

export default new Boris();
