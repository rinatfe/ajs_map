export default class ErrorRepository {
  constructor() {
    this.error = new Map();
    this.error.set(404, 'not found')
      .set(300, 'The connection is lost')
      .set(400, 'I cannot');
  }

  translate(code) {
    if (this.error.has(code)) {
      return this.error.get(code);
    }
    return 'Unknown error';
  }
}
