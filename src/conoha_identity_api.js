import CoNoHaBase from "./conoha_base";
const moment = require("moment");

export default class CoNoHaIdentityAPI extends CoNoHaBase {
  constructor(username = "", password = "", region = "tyo1", tenant_id = "") {
    super(username, password, region, tenant_id);
    this.endpoint_identity = `https://identity.${this.region}.conoha.io`;
  }

  /**
   * X-Auth-Token の設定
   */
  async appendTokenToHeader(options) {
    await this.regenerateToken();
    super.appendTokenToHeader(options);
  }

  /**
   * トークンの発行が必要(期限切れ、未発行)な場合は発行
   */
  async regenerateToken() {
    const expiredAt = moment(this.token?.expires);
    const now = moment();
    if (!this.token?.id || now > expiredAt) {
      await this.generateToken();
    }
  }

  /****************************************************************************/
  /* Identity                                                                 */
  /****************************************************************************/
  /**
   * バージョン情報取得
   * @description https://www.conoha.jp/docs/identity-get_version_list.php
   */
  async getVersionIdentity() {
    const url = `${this.endpoint}/`;
    const res = await this.get(url);
    return res;
  }

  /**
   * バージョン情報詳細取得
   * @description https://www.conoha.jp/docs/identity-get_version_detail.php
   */
  async getVersionDetailIdentity() {
    const url = `${this.endpoint}/v2.0`;
    const res = await this.get(url);
    return res;
  }


  /**
   * トークン発行
   * @description https://www.conoha.jp/docs/identity-post_tokens.php
   */
  async generateToken() {
    const url = `${this.endpoint_identity}/v2.0/tokens`;
    const data = {
      auth: {
        passwordCredentials: {
          username: this.username,
          password: this.password,
        },
        tenantId: this.tenant_id,
      },
    };
    const res = await this.post(url, data);
    this.token = res?.data?.access?.token;
    return res;
  }
}
