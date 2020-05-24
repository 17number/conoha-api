import CoNoHaIdentityAPI from "./conoha_identity_api";

export default class CoNoHaAccountAPI extends CoNoHaIdentityAPI {
  constructor(username = "", password = "", region = "tyo1", tenant_id = "") {
    super(username, password, region, tenant_id);
    this.endpoint = `https://account.${this.region}.conoha.io`;
  }

  /****************************************************************************/
  /* Account(Billing)                                                         */
  /****************************************************************************/
  /**
   * バージョン情報取得
   * @description https://www.conoha.jp/docs/account-get_version_list.php
   */
  async getVersion() {
    const url = `${this.endpoint}/`;
    const res = await this.get(url);
    return res;
  }

  /**
   * バージョン情報詳細取得
   * @description https://www.conoha.jp/docs/account-get_version_detail.php
   */
  async getVersionDetail() {
    const url = `${this.endpoint}/v1`;
    const res = await this.get(url);
    return res;
  }

  /**
   * アイテム一覧の取得
   * @description https://www.conoha.jp/docs/account-order-item-list.php
   */
  async getOrderItems() {
    const url = `${this.endpoint}/v1/${this.tenant_id}/order-items`;
    const res = await this.get(url, null ,true);
    return res;
  }

  /**
   * アイテム詳細取得(アイテム指定)
   * @description https://www.conoha.jp/docs/account-order-item-detail-specified.php
   */
  // TODO: implementation

  /**
   * 入金履歴取得
   * @description https://www.conoha.jp/docs/account-payment-histories.php
   */
  // TODO: implementation

  /**
   * 入金サマリー取得
   * @description https://www.conoha.jp/docs/account-payment-summary.php
   */
  // TODO: implementation

  /**
   * 請求データ一覧取得
   * @description https://www.conoha.jp/docs/account-billing-invoices-list.php
   */
  async getBillingInvoices() {
    const url = `${this.endpoint}/v1/${this.tenant_id}/billing-invoices`;
    const res = await this.get(url, null ,true);
    return res;
  }

  /**
   * 請求データ明細取得(アイテム指定)
   * @description https://www.conoha.jp/docs/account-billing-invoices-detail-specified.php
   */
  // TODO: implementation

  /**
   * 告知一覧取得
   * @description https://www.conoha.jp/docs/account-informations-list.php
   */
  // TODO: implementation

  /**
   * 告知詳細取得(アイテム指定)
   * @description https://www.conoha.jp/docs/account-informations-detail-specified.php
   */
  // TODO: implementation

  /**
   * 告知既読・未読変更
   * @description https://www.conoha.jp/docs/account-informations-marking.php
   */
  // TODO: implementation

  /**
   * Object Storage 利用状況グラフ(リクエスト数)
   * @description https://www.conoha.jp/docs/account-get_objectstorage_request_rrd.php
   */
  // TODO: implementation

  /**
   * Object Storage 利用状況グラフ(使用容量数)
   * @description https://www.conoha.jp/docs/account-get_objectstorage_size_rrd.php
   */
  // TODO: implementation
}
