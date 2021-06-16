import Cookies from "js-cookie";

export const BASE_URL = process.env.REACT_APP_SERVER_URL;

class Auth {
  getCipher(): string | null {
    return Cookies.get("shortchange-admin-cipher") || null;
  }

  setCipher(token: string): void {
    Cookies.set("shortchange-admin-cipher", token, { expires: 1 }); // expire 24 hours
  }

  clearCipher(): void {
    Cookies.remove("shortchange-admin-cipher");
  }
}

export default new Auth();
