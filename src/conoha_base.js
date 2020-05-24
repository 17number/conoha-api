import * as axios from "axios";
import * as log4js from "log4js";

export default class CoNoHaBase {
  constructor(username = "", password = "", region = "tyo1", tenant_id = "") {
    this.axios = axios.create();
    this.username = username;
    this.password = password;
    this.region = region;
    this.tenant_id = tenant_id;
    this.token = {};
    this.logger = log4js.getLogger();
    this.logger.level = process.env.LOG_LEVEL || "info";
  }

  /**
   * X-Auth-Token の設定
   */
  async appendTokenToHeader(options) {
    Object.assign(
      options,
      {
        headers: {
          "X-Auth-Token": this.token.id,
        },
      }
    );
  }

  async request(url, method, data = null, isRequiredAuth = false) {
    const options = { url, method };
    if (data) {
      Object.assign(options, { data });
    }
    if (isRequiredAuth) {
      await this.appendTokenToHeader(options);
    }

    let res;
    try {
      res = await this.axios.request(options);
      this.logger.debug({ res, data: JSON.stringify(res?.data) });
    } catch (error) {
      if (error.status?.response >= 400) {
        this.logger.error({
          error,
          config: error.config,
          response: error.response
        });
        throw error;
      }

      res = error.response;
    }
    return res;
  }

  async get(url, data = null, isRequiredAuth = false) {
    return await this.request(url, "GET", data, isRequiredAuth);
  }

  async post(url, data = null, isRequiredAuth = false) {
    return await this.request(url, "POST", data, isRequiredAuth);
  }

  async put(url, data = null, isRequiredAuth = false) {
    return await this.request(url, "PUT", data, isRequiredAuth);
  }

  async patch(url, data = null, isRequiredAuth = false) {
    return await this.request(url, "PATCH", data, isRequiredAuth);
  }

  async delete(url, data = null, isRequiredAuth = false) {
    return await this.request(url, "DELETE", data, isRequiredAuth);
  }
}
