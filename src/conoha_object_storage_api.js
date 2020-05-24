import CoNoHaIdentityAPI from "./conoha_identity_api";

export default class CoNoHaObjectStorageAPI extends CoNoHaIdentityAPI {
  constructor(username = "", password = "", region = "tyo1", tenant_id = "") {
    super(username, password, region, tenant_id);
    this.endpoint = `https://object-storage.${this.region}.conoha.io`;
  }

  /****************************************************************************/
  /* Object Storage                                                           */
  /****************************************************************************/
  /**
   * アカウント情報取得
   * @description https://www.conoha.jp/docs/swift-show_account_details_and_list_containers.php
   */
  // TODO: implementation

  /**
   * アカウントクォータ設定
   * @description https://www.conoha.jp/docs/swift-set_account_quota.php
   */
  // TODO: implementation

  /**
   * コンテナ情報取得
   * @description https://www.conoha.jp/docs/swift-show_container_details_and_list_objects.php
   */
  // TODO: implementation

  /**
   * コンテナ作成
   * @description https://www.conoha.jp/docs/swift-create_container.php
   */
  // TODO: implementation

  /**
   * コンテナ削除
   * @description https://www.conoha.jp/docs/swift-delete_container.php
   */
  // TODO: implementation

  /**
   * オブジェクト情報取得
   * @description https://www.conoha.jp/docs/swift-get_object_content_and_metadata.php
   */
  // TODO: implementation

  /**
   * オブジェクトアップロード
   * @description https://www.conoha.jp/docs/swift-object_upload.php
   */
  // TODO: implementation

  /**
   * オブジェクトダウンロード
   * @description https://www.conoha.jp/docs/swift-object_download.php
   */
  // TODO: implementation

  /**
   * オブジェクト複製
   * @description https://www.conoha.jp/docs/swift-copy_object.php
   */
  // TODO: implementation

  /**
   * オブジェクト削除
   * @description https://www.conoha.jp/docs/swift-delete_object.php
   */
  // TODO: implementation

  /**
   * dynamic large objects
   * @description https://www.conoha.jp/docs/swift-dlo.php
   */
  // TODO: implementation

  /**
   * static Large Object
   * @description https://www.conoha.jp/docs/swift-slo.php
   */
  // TODO: implementation

  /**
   * object versioning
   * @description https://www.conoha.jp/docs/swift-object-versioning.php
   */
  // TODO: implementation

  /**
   * schedule objects for deletion
   * @description https://www.conoha.jp/docs/swift-schedule_objects_for_deletion.php
   */
  // TODO: implementation

  /**
   * temporary url middleware
   * @description https://www.conoha.jp/docs/swift-temporary_url_middleware.php
   */
  // TODO: implementation

  /**
   * web publishing
   * @description https://www.conoha.jp/docs/swift-web_publishing.php
   */
  // TODO: implementation
}
