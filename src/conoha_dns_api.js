import CoNoHaIdentityAPI from "./conoha_identity_api";

export default class CoNoHaDnsAPI extends CoNoHaIdentityAPI {
  constructor(username = "", password = "", region = "tyo1", tenant_id = "") {
    super(username, password, region, tenant_id);
    this.endpoint = `https://dns-service.${this.region}.conoha.io`;
  }

  /****************************************************************************/
  /* DNS                                                                      */
  /****************************************************************************/
  /**
   * バージョン情報取得
   * @description https://www.conoha.jp/docs/paas-dns-get-version-list.php
   */
  // TODO: implementation

  /**
   * ドメインホスティング情報表示
   * @description https://www.conoha.jp/docs/paas-dns-get-servers-hosting-a-domain.php
   */
  // TODO: implementation

  /**
   * ドメイン一覧表示
   * @description https://www.conoha.jp/docs/paas-dns-list-domains.php
   */
  // TODO: implementation

  /**
   * ドメイン作成
   * @description https://www.conoha.jp/docs/paas-dns-create-domain.php
   */
  // TODO: implementation

  /**
   * ドメイン削除
   * @description https://www.conoha.jp/docs/paas-dns-delete-a-domain.php
   */
  // TODO: implementation

  /**
   * ドメイン情報表示
   * @description https://www.conoha.jp/docs/paas-dns-get-a-domain.php
   */
  // TODO: implementation

  /**
   * ドメイン更新
   * @description https://www.conoha.jp/docs/paas-dns-update-a-domain.php
   */
  // TODO: implementation

  /**
   * レコード一覧取得
   * @description https://www.conoha.jp/docs/paas-dns-list-records-in-a-domain.php
   */
  // TODO: implementation

  /**
   * レコード作成
   * @description https://www.conoha.jp/docs/paas-dns-create-record.php
   */
  // TODO: implementation

  /**
   * レコード削除
   * @description https://www.conoha.jp/docs/paas-dns-delete-a-record.php
   */
  // TODO: implementation

  /**
   * レコード情報表示
   * @description https://www.conoha.jp/docs/paas-dns-get-a-record.php
   */
  // TODO: implementation

  /**
   * レコード更新
   * @description https://www.conoha.jp/docs/paas-dns-update-a-record.php
   */
  // TODO: implementation

  /**
   * ゾーンファイルインポート
   * @description https://www.conoha.jp/docs/paas-dns-import-zone.php
   */
  // TODO: implementation

  /**
   * ゾーンファイルエクスポート
   * @description https://www.conoha.jp/docs/paas-dns-export-zone.php
   */
  // TODO: implementation
}
