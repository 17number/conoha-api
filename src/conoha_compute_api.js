import CoNoHaIdentityAPI from "./conoha_identity_api";

export default class CoNoHaComputeAPI extends CoNoHaIdentityAPI {
  constructor(username = "", password = "", region = "tyo1", tenant_id = "") {
    super(username, password, region, tenant_id);
    this.endpoint = `https://compute.${this.region}.conoha.io`;
  }

  /****************************************************************************/
  /* Compute                                                                  */
  /****************************************************************************/
  /**
   * バージョン情報取得
   * @description https://www.conoha.jp/docs/compute-get_version_list.php
   */
  async getVersion() {
    const url = `${this.endpoint}/`;
    const res = await this.get(url);
    return res;
  }

  /**
   * バージョン情報詳細取得
   * @description https://www.conoha.jp/docs/compute-get_version_detail.php
   */
  async getVersionDetail() {
    const url = `${this.endpoint}/v2`;
    const res = await this.get(url);
    return res;
  }

  /**
   * VMプラン一覧取得
   * @description https://www.conoha.jp/docs/compute-get_flavors_list.php
   */
  // TODO: implementation

  /**
   * VMプラン詳細取得
   * @description https://www.conoha.jp/docs/compute-get_flavors_detail.php
   */
  // TODO: implementation

  /**
   * VMプラン詳細取得(アイテム指定)
   * @description https://www.conoha.jp/docs/compute-get_flavors_detail_specified.php
   */
  // TODO: implementation

  /**
   * VM一覧取得
   * @description https://www.conoha.jp/docs/compute-get_vms_list.php
   */
  async getServers() {
    const url = `${this.endpoint}/v2/${this.tenant_id}/servers`;
    const res = await this.get(url, null, true);
    return res;
  }

  /**
   * VM一覧詳細取得
   * @description https://www.conoha.jp/docs/compute-get_vms_detail.php
   */
  // TODO: implementation

  /**
   * VM詳細取得（アイテム指定)
   * @description https://www.conoha.jp/docs/compute-get_vms_detail_specified.php
   */
  // TODO: implementation

  /**
   * VM追加
   * @description https://www.conoha.jp/docs/compute-create_vm.php
   */
  // TODO: implementation

  /**
   * VM削除
   * @description https://www.conoha.jp/docs/compute-delete_vm.php
   */
  // TODO: implementation

  /**
   * VM起動
   * @description https://www.conoha.jp/docs/compute-power_on_vm.php
   */
  // TODO: implementation

  /**
   * VM再起動
   * @description https://www.conoha.jp/docs/compute-reboot_vm.php
   */
  // TODO: implementation

  /**
   * VM強制停止
   * @description https://www.conoha.jp/docs/compute-stop_forcibly_vm.php
   */
  // TODO: implementation

  /**
   * VM通常停止
   * @description https://www.conoha.jp/docs/compute-stop_cleanly_vm.php
   */
  // TODO: implementation

  /**
   * OS再インストール
   * @description https://www.conoha.jp/docs/compute-re_install.php
   */
  // TODO: implementation

  /**
   * VMリサイズ
   * @description https://www.conoha.jp/docs/compute-vm_resize.php
   */
  // TODO: implementation

  /**
   * VMリサイズ（confirm）
   * @description https://www.conoha.jp/docs/compute-vm_resize_confirm.php
   */
  // TODO: implementation

  /**
   * VMリサイズ（revert）
   * @description https://www.conoha.jp/docs/compute-vm_resize_revert.php
   */
  // TODO: implementation

  /**
   * VNCコンソール
   * @description https://www.conoha.jp/docs/compute-vnc_console.php
   */
  // TODO: implementation

  /**
   * ローカルディスクのイメージ保存
   * @description https://www.conoha.jp/docs/compute-create_image.php
   */
  // TODO: implementation

  /**
   * ストレージコントローラー変更
   * @description https://www.conoha.jp/docs/compute-hw_disk_bus.php
   */
  // TODO: implementation

  /**
   * ネットワークアダプタ変更
   * @description https://www.conoha.jp/docs/compute-hw_vif_model.php
   */
  // TODO: implementation

  /**
   * ビデオデバイスの変更
   * @description https://www.conoha.jp/docs/compute-hw_video_model.php
   */
  // TODO: implementation

  /**
   * コンソールのキーマップ変更
   * @description https://www.conoha.jp/docs/compute-vnc_key_map.php
   */
  // TODO: implementation

  /**
   * WebSocket(novaconsole)用のAPI
   * @description https://www.conoha.jp/docs/compute-web_serial_console.php
   */
  // TODO: implementation

  /**
   * WebSocket(httpconsole)用のAPI
   * @description https://www.conoha.jp/docs/compute-web_http_serial_console.php
   */
  // TODO: implementation

  /**
   * ISOイメージの挿入（mount）
   * @description https://www.conoha.jp/docs/compute-insert_iso_image.php
   */
  // TODO: implementation

  /**
   * ISOイメージの排出（unmount）
   * @description https://www.conoha.jp/docs/compute-eject_iso_image.php
   */
  // TODO: implementation

  /**
   * セキュリティグループのサーバへの割り当て状態表示
   * @description https://www.conoha.jp/docs/compute-get_secgroups_status.php
   */
  // TODO: implementation

  /**
   * キーペア一覧取得
   * @description https://www.conoha.jp/docs/compute-get_keypairs.php
   */
  // TODO: implementation

  /**
   * キーペア詳細取得(アイテム指定)
   * @description https://www.conoha.jp/docs/compute-get_keypairs_detail_specified.php
   */
  // TODO: implementation

  /**
   * キーペア追加
   * @description https://www.conoha.jp/docs/compute-add_keypair.php
   */
  // TODO: implementation

  /**
   * キーペア削除
   * @description https://www.conoha.jp/docs/compute-delete_keypair.php
   */
  // TODO: implementation

  /**
   * イメージ一覧取得(nova)
   * @description https://www.conoha.jp/docs/compute-get_images_list.php
   */
  // TODO: implementation

  /**
   * イメージ詳細取得
   * @description https://www.conoha.jp/docs/compute-get_images_detail.php
   */
  // TODO: implementation

  /**
   * イメージ詳細取得(アイテム指定)(nova)
   * @description https://www.conoha.jp/docs/compute-get_images_detail_specified.php
   */
  // TODO: implementation

  /**
   * アタッチ済みボリューム一覧
   * @description https://www.conoha.jp/docs/compute-get_volume_attachments.php
   */
  // TODO: implementation

  /**
   * アタッチ済みボリューム取得（アイテム指定)
   * @description https://www.conoha.jp/docs/compute-get_volume_attachment_specified.php
   */
  // TODO: implementation

  /**
   * ボリュームアタッチ
   * @description https://www.conoha.jp/docs/compute-attach_volume.php
   */
  // TODO: implementation

  /**
   * ボリュームデタッチ
   * @description https://www.conoha.jp/docs/compute-dettach_volume.php
   */
  // TODO: implementation

  /**
   * アタッチ済みポート一覧取得
   * @description https://www.conoha.jp/docs/compute-get_attached_ports_list.php
   */
  // TODO: implementation

  /**
   * アタッチ済みポート取得（アイテム指定)
   * @description https://www.conoha.jp/docs/compute-get_attached_port_specified.php
   */
  // TODO: implementation

  /**
   * ポートアタッチ
   * @description https://www.conoha.jp/docs/compute-attach_port.php
   */
  // TODO: implementation

  /**
   * ポートデタッチ
   * @description https://www.conoha.jp/docs/compute-dettach_port.php
   */
  // TODO: implementation

  /**
   * VMメタデータの更新（ネームタグの変更）
   * @description https://www.conoha.jp/docs/compute-update_metadata.php
   */
  // TODO: implementation

  /**
   * VMメタデータ取得
   * @description https://www.conoha.jp/docs/compute-get_server_metadata.php
   */
  // TODO: implementation

  /**
   * VMに紐づくアドレス一覧
   * @description https://www.conoha.jp/docs/compute-get_server_addresses.php
   */
  // TODO: implementation

  /**
   * VMに紐づくアドレス一覧(ネットワーク指定)
   * @description https://www.conoha.jp/docs/compute-get_server_addresses_by_network.php
   */
  // TODO: implementation

  /**
   * VPS利用状況グラフ（CPU使用時間）
   * @description https://www.conoha.jp/docs/compute-get_cpu_utilization_graph.php
   */
  // TODO: implementation

  /**
   * VPS利用状況グラフ（インターフェイストラフィック）
   * @description https://www.conoha.jp/docs/compute-get_interface_traffic_graph.php
   */
  // TODO: implementation

  /**
   * VPS利用状況グラフ（ディスクIO）
   * @description https://www.conoha.jp/docs/compute-get_disk_io_graph.php
   */
  // TODO: implementation

  /**
   * バックアップ一覧取得
   * @description https://www.conoha.jp/docs/backup-get_backup_list.php
   */
  // TODO: implementation

  /**
   * バックアップ一覧取得(backup id 指定)
   * @description https://www.conoha.jp/docs/backup-get_backup_list_detailed.php
   */
  // TODO: implementation

  /**
   * バックアップの申し込み
   * @description https://www.conoha.jp/docs/backup-start_backup.php
   */
  // TODO: implementation

  /**
   * バックアップの解約
   * @description https://www.conoha.jp/docs/backup-end_backup.php
   */
  // TODO: implementation

  /**
   * ブートディスクバックアップのリストア
   * @description https://www.conoha.jp/docs/backup-restore_backup.php
   */
  // TODO: implementation

  /**
   * ブート・追加ディスクバックアップのイメージ保存
   * @description https://www.conoha.jp/docs/backup-backup_to_image_object.php
   */
  // TODO: implementation

  /**
   * ISOイメージの一覧
   * @description https://www.conoha.jp/docs/compute-iso-list-show.php
   */
  // TODO: implementation

  /**
   * ISOイメージダウンロード
   * @description https://www.conoha.jp/docs/compute-iso-download-add.php
   */
  // TODO: implementation
}
