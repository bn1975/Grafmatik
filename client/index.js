const CryptoJS = require('crypto-js');
const request = require('request-promise');
const BASIC = 'Basic ';

class Client {
  constructor({username, password, uri}) {
    this.username = username;
    this.password = password;
    this.uri  = uri;
  }
  with(config) {
    const params = Object.assign({}, this, config);

    return new this.constructor(params);
  }
  test() {
    return this.run('GET', { path: '/unprotected', skipAuth: true })
  }
  authTest() {
    return this.run('GET', { path:  '/protected' });
  }
  posts(query) {
    return this.run('GET', { path: '/posts', query: query, skipAuth: true});
  }
  createPost(post) {
    return this.run('POST', { path: '/posts'}, post);
  }
  run(method, resource, body) {
    return request({
      method: method,
      qs: resource.query,
      uri: this.uri.concat(resource.path),
      headers: resource.skipAuth || this.authHeaders(),
      body: body,
      json: true
     })
  }
  authHeaders() {
   return {
      Authorization: BASIC.concat(this.encodedUserPass())
    }
  }
  encodedUserPass() {
    const userPass = this.username + ':' + this.password;
    const words = CryptoJS.enc.Utf8.parse(userPass);
    const creds = CryptoJS.enc.Base64.stringify(words); // ENCODE

    return creds;
  }
}

module.exports = Client;
