import CoNoHaIdentityAPI from "./conoha_identity_api";

export default class CoNoHaDatabaseAPI extends CoNoHaIdentityAPI {
  constructor(username = "", password = "", region = "tyo1", tenant_id = "") {
    super(username, password, region, tenant_id);
    this.endpoint = `https://database-hosting.${this.region}.conoha.io`;
  }

  /****************************************************************************/
  /* Database                                                                 */
  /****************************************************************************/
  /**
   * バージョン情報取得
   * @description https://www.conoha.jp/docs/paas-database-get-version-list.php
   */
  // TODO: implementation

  /**
   * バージョン情報詳細取得
   * @description https://www.conoha.jp/docs/paas-database-get-version-detail.php
   */
  // TODO: implementation

  /**
   * サービス作成
   * @description https://www.conoha.jp/docs/paas-database-create-database-service.php
   */
  // TODO: implementation

  /**
   * サービス一覧取得
   * @description https://www.conoha.jp/docs/paas-database-list-database-service.php
   */
  // TODO: implementation

  /**
   * サービス情報取得
   * @description https://www.conoha.jp/docs/paas-database-get-database-service.php
   */
  // TODO: implementation

  /**
   * サービス更新
   * @description https://www.conoha.jp/docs/paas-database-update-database-service.php
   */
  // TODO: implementation

  /**
   * サービス削除
   * @description https://www.conoha.jp/docs/paas-database-delete-database-service.php
   */
  // TODO: implementation

  /**
   * サービスメタデータ更新
   * @description https://www.conoha.jp/docs/paas-database-update-database-service-metadata.php
   */
  // TODO: implementation

  /**
   * データベース上限値取得
   * @description https://www.conoha.jp/docs/paas-database-get-database-quotas.php
   */
  // TODO: implementation

  /**
   * データベース上限値変更
   * @description https://www.conoha.jp/docs/paas-database-update-database-quotas.php
   */
  // TODO: implementation

  /**
   * バックアップ有効無効
   * @description https://www.conoha.jp/docs/paas-database-create-database-backup.php
   */
  // TODO: implementation

  /**
   * データベース作成
   * @description https://www.conoha.jp/docs/paas-database-create-database.php
   */
  // TODO: implementation

  /**
   * データベース一覧取得
   * @description https://www.conoha.jp/docs/paas-database-list-database.php
   */
  // TODO: implementation

  /**
   * データベース情報取得
   * @description https://www.conoha.jp/docs/paas-database-get-database.php
   */
  // TODO: implementation

  /**
   * データベース更新
   * @description https://www.conoha.jp/docs/paas-database-update-database.php
   */
  // TODO: implementation

  /**
   * データベース削除
   * @description https://www.conoha.jp/docs/paas-database-delete-databases.php
   */
  // TODO: implementation

  /**
   * データベース権限作成
   * @description https://www.conoha.jp/docs/paas-database-create-grant.php
   */
  // TODO: implementation

  /**
   * データベース権限一覧取得
   * @description https://www.conoha.jp/docs/paas-database-list-grant.php
   */
  // TODO: implementation

  /**
   * データベース権限削除
   * @description https://www.conoha.jp/docs/paas-database-delete-grant.php
   */
  // TODO: implementation

  /**
   * バックアップ一覧
   * @description https://www.conoha.jp/docs/paas-database-list-database-backup.php
   */
  // TODO: implementation

  /**
   * リストア
   * @description https://www.conoha.jp/docs/paas-database-restore-database-backup.php
   */
  // TODO: implementation

  /**
   * アカウント作成
   * @description https://www.conoha.jp/docs/paas-database-create-database-account.php
   */
  // TODO: implementation

  /**
   * アカウント一覧取得
   * @description https://www.conoha.jp/docs/paas-database-list-database-account.php
   */
  // TODO: implementation

  /**
   * アカウント情報取得
   * @description https://www.conoha.jp/docs/paas-database-get-database-account.php
   */
  // TODO: implementation

  /**
   * アカウント更新
   * @description https://www.conoha.jp/docs/paas-database-update-database-account.php
   */
  // TODO: implementation

  /**
   * アカウント削除
   * @description https://www.conoha.jp/docs/paas-database-delete-database-account.php
   */
  // TODO: implementation
}
