import CoNoHaIdentityAPI from "./conoha_identity_api";

export default class CoNoHaBlockStorageAPI extends CoNoHaIdentityAPI {
  constructor(username = "", password = "", region = "tyo1", tenant_id = "") {
    super(username, password, region, tenant_id);
    this.endpoint = `https://block-storage.${this.region}.conoha.io`;
  }

  /****************************************************************************/
  /* Block Storage                                                            */
  /****************************************************************************/
  /**
   * バージョン情報取得
   * @description https://www.conoha.jp/docs/cinder-get_version_list.php
   */
  // TODO: implementation

  /**
   * バージョン情報詳細取得
   * @description https://www.conoha.jp/docs/cinder-get_version_detail.php
   */
  // TODO: implementation

  /**
   * ボリュームタイプ一覧取得
   * @description https://www.conoha.jp/docs/cinder-get_volume_types_list.php
   */
  // TODO: implementation

  /**
   * ボリュームタイプ取得（アイテム指定)
   * @description https://www.conoha.jp/docs/cinder-get_volume_type_specified.php
   */
  // TODO: implementation

  /**
   * ボリューム一覧取得
   * @description https://www.conoha.jp/docs/cinder-get_volumes_list.php
   */
  // TODO: implementation

  /**
   * ボリューム詳細取得
   * @description https://www.conoha.jp/docs/cinder-get_volumes_detail.php
   */
  // TODO: implementation

  /**
   * ボリューム詳細取得（アイテム指定)
   * @description https://www.conoha.jp/docs/cinder-get_volume_detail_specified.php
   */
  // TODO: implementation

  /**
   * ボリューム作成
   * @description https://www.conoha.jp/docs/cinder-create_volume.php
   */
  // TODO: implementation

  /**
   * ボリューム作成（ソースボリューム指定）
   * @description https://www.conoha.jp/docs/cinder-create_volume_specified.php
   */
  // TODO: implementation

  /**
   * ボリューム削除
   * @description https://www.conoha.jp/docs/cinder-delete_volume.php
   */
  // TODO: implementation

  /**
   * ブロックディスクのイメージ保存
   * @description https://www.conoha.jp/docs/cinder-save_volume.php
   */
  // TODO: implementation
}
