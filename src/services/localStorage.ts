
class LocalStorage {
  static AUTH_TOKEN = 'auth-token';

  static getItem(key: string) {
    return window.localStorage.getItem(key);
  }

  static setItem(key: string, value: string) {
    window.localStorage.setItem(key, value);
  }

  static removeItem(key: string) {
    window.localStorage.removeItem(key);
  }
}

export default LocalStorage;
