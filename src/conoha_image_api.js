import CoNoHaIdentityAPI from "./conoha_identity_api";

export default class CoNoHaImageAPI extends CoNoHaIdentityAPI {
  constructor(username = "", password = "", region = "tyo1", tenant_id = "") {
    super(username, password, region, tenant_id);
    this.endpoint = `https://image-service.${this.region}.conoha.io`;
  }

  /****************************************************************************/
  /* Image                                                                    */
  /****************************************************************************/
  /**
   * バージョン情報取得
   * @description https://www.conoha.jp/docs/image-get_version_list.php
   */
  // TODO: implementation

  /**
   * イメージ一覧取得(Glance)
   * @description https://www.conoha.jp/docs/image-get_images_list.php
   */
  // TODO: implementation

  /**
   * イメージ詳細取得(アイテム指定)(glance)
   * @description https://www.conoha.jp/docs/image-get_images_detail_specified.php
   */
  // TODO: implementation

  /**
   * イメージコンテナのスキーマ情報取得
   * @description https://www.conoha.jp/docs/image-get_schemas_images_list.php
   */
  // TODO: implementation

  /**
   * イメージのスキーマ情報取得
   * @description https://www.conoha.jp/docs/image-get_schemas_image_list.php
   */
  // TODO: implementation

  /**
   * イメージメンバーコンテナのスキーマ情報取得
   * @description https://www.conoha.jp/docs/image-get_schemas_members_list.php
   */
  // TODO: implementation

  /**
   * イメージメンバーのスキーマ情報取得
   * @description https://www.conoha.jp/docs/image-get_schemas_member_list.php
   */
  // TODO: implementation

  /**
   * イメージメンバー一覧取得
   * @description https://www.conoha.jp/docs/image-get_members_list.php
   */
  // TODO: implementation

  /**
   * イメージ削除
   * @description https://www.conoha.jp/docs/image-remove_image.php
   */
  // TODO: implementation

  /**
   * イメージ保存容量制限
   * @description https://www.conoha.jp/docs/image-set_quota.php
   */
  // TODO: implementation

  /**
   * イメージ保存容量制限情報取得
   * @description https://www.conoha.jp/docs/image-get_quota.php
   */
  // TODO: implementation
}
