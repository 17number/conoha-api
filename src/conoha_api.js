import * as axios from "axios";
import * as log4js from "log4js";
const logger = log4js.getLogger();
logger.level = process.env.LOG_LEVEL || "info";

export default class CoNoHaAPI {
  constructor(username = "", password = "", region = "tyo1", tenant_id = "") {
    this.axios = axios.create();
    this.username = username;
    this.password = password;
    this.region = region;
    this.tenant_id = tenant_id;
    this.token = {};
    this.createEndpoints();
  }

  createEndpoints() {
    this.endpoints = {
      identity: `https://identity.${this.region}.conoha.io`,
      accountBilling: `https://account.${this.region}.conoha.io`,
      compute: `https://compute.${this.region}.conoha.io`,
      blockStorage: `https://block-storage.${this.region}.conoha.io`,
      image: `https://image-service.${this.region}.conoha.io`,
      network: `https://networking.${this.region}.conoha.io`,
      objectStorage: `https://object-storage.${this.region}.conoha.io`,
      database: `https://database-hosting.${this.region}.conoha.io`,
      dns: `https://dns-service.${this.region}.conoha.io`,
      mail: `https://mail-hosting.${this.region}.conoha.io`,
    };
  }

  appendTokenToHeader(options) {
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
      this.appendTokenToHeader(options);
    }

    let res;
    try {
      res = await this.axios.request(options);
      logger.debug({ res, data: JSON.stringify(res?.data) });
    } catch (error) {
      logger.error({error: error});
      throw error;
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

  /****************************************************************************/
  /* Identity                                                                 */
  /****************************************************************************/
  /**
   * バージョン情報取得
   * @description https://www.conoha.jp/docs/identity-get_version_list.php
   */
  async identityGetVersion() {};

  /**
   * バージョン情報詳細取得
   * @description https://www.conoha.jp/docs/identity-get_version_detail.php
   */
  async identityGetVersionDetail() {};


  /**
   * トークン発行
   * @description https://www.conoha.jp/docs/identity-post_tokens.php
   */
  async identityGenerateToken() {
    const url = `${this.endpoints.identity}/v2.0/tokens`;
    const data = {
      auth: {
        passwordCredentials: {
          username: this.username,
          password: this.password,
        },
      },
    };
    const res = await this.post(url, data);
    this.token = res?.data?.access?.token;
    return res;
  };

  /****************************************************************************/
  /* Account(Billing)                                                         */
  /****************************************************************************/
  /**
   * バージョン情報取得
   * @description https://www.conoha.jp/docs/account-get_version_list.php
   */
  // TODO: implementation

  /**
   * バージョン情報詳細取得
   * @description https://www.conoha.jp/docs/account-get_version_detail.php
   */
  // TODO: implementation

  /**
   * アイテム一覧の取得
   * @description https://www.conoha.jp/docs/account-order-item-list.php
   */
  // TODO: implementation

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
  // TODO: implementation

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

  /****************************************************************************/
  /* Compute                                                                  */
  /****************************************************************************/
  /**
   * バージョン情報取得
   * @description https://www.conoha.jp/docs/compute-get_version_list.php
   */
  // TODO: implementation

  /**
   * バージョン情報詳細取得
   * @description https://www.conoha.jp/docs/compute-get_version_detail.php
   */
  // TODO: implementation

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
  // TODO: implementation

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

  /****************************************************************************/
  /* Network                                                                  */
  /****************************************************************************/
  /**
   * バージョン情報取得
   * @description https://www.conoha.jp/docs/neutron-get_version_list.php
   */
  // TODO: implementation

  /**
   * バージョン情報詳細取得
   * @description https://www.conoha.jp/docs/neutron-get_version_detail.php
   */
  // TODO: implementation

  /**
   * ネットワーク一覧取得
   * @description https://www.conoha.jp/docs/neutron-get_networks_list.php
   */
  // TODO: implementation

  /**
   * ネットワーク詳細取得
   * @description https://www.conoha.jp/docs/neutron-get_networks_detail_specified.php
   */
  // TODO: implementation

  /**
   * ネットワーク追加(ローカルネット用)
   * @description https://www.conoha.jp/docs/neutron-add_network.php
   */
  // TODO: implementation

  /**
   * ネットワーク削除
   * @description https://www.conoha.jp/docs/neutron-remove_network.php
   */
  // TODO: implementation

  /**
   * ポート一覧取得
   * @description https://www.conoha.jp/docs/neutron-get_ports_list.php
   */
  // TODO: implementation

  /**
   * ポート詳細取得
   * @description https://www.conoha.jp/docs/neutron-get_ports_detail_specified.php
   */
  // TODO: implementation

  /**
   * ポート追加
   * @description https://www.conoha.jp/docs/neutron-add_port.php
   */
  // TODO: implementation

  /**
   * ポート更新
   * @description https://www.conoha.jp/docs/neutron-update_port.php
   */
  // TODO: implementation

  /**
   * ポート削除
   * @description https://www.conoha.jp/docs/neutron-remove_port.php
   */
  // TODO: implementation

  /**
   * サブネット一覧取得
   * @description https://www.conoha.jp/docs/neutron-get_subnets_list.php
   */
  // TODO: implementation

  /**
   * サブネット詳細取得
   * @description https://www.conoha.jp/docs/neutron-get_subnets_detail_specified.php
   */
  // TODO: implementation

  /**
   * サブネットの払い出し(ローカルネット用)
   * @description https://www.conoha.jp/docs/neutron-add_subnet.php
   */
  // TODO: implementation

  /**
   * サブネットの払い出し(追加IP用)
   * @description https://www.conoha.jp/docs/neutron-add_subnet_for_addip.php
   */
  // TODO: implementation

  /**
   * サブネットの払い出し(LB用)
   * @description https://www.conoha.jp/docs/neutron-add_subnet_for_lb.php
   */
  // TODO: implementation

  /**
   * サブネットの削除
   * @description https://www.conoha.jp/docs/neutron-remove_subnet.php
   */
  // TODO: implementation

  /**
   * POOL一覧取得
   * @description https://www.conoha.jp/docs/neutron-get_pools_list.php
   */
  // TODO: implementation

  /**
   * POOL詳細取得
   * @description https://www.conoha.jp/docs/neutron-get_pools_detail_specified.php
   */
  // TODO: implementation

  /**
   * POOL追加（バランシング指定）
   * @description https://www.conoha.jp/docs/neutron-add_pool.php
   */
  // TODO: implementation

  /**
   * POOL更新(バランシング方式の変更)
   * @description https://www.conoha.jp/docs/neutron-change_balancer_type.php
   */
  // TODO: implementation

  /**
   * POOL削除
   * @description https://www.conoha.jp/docs/neutron-delete_pool.php
   */
  // TODO: implementation

  /**
   * VIP一覧取得
   * @description https://www.conoha.jp/docs/neutron-get_vips_list.php
   */
  // TODO: implementation

  /**
   * VIP詳細取得
   * @description https://www.conoha.jp/docs/neutron-get_vips_detail_specified.php
   */
  // TODO: implementation

  /**
   * VIP作成
   * @description https://www.conoha.jp/docs/neutron-create_vip.php
   */
  // TODO: implementation

  /**
   * VIP削除
   * @description https://www.conoha.jp/docs/neutron-remove_vip.php
   */
  // TODO: implementation

  /**
   * REAL（member）一覧取得
   * @description https://www.conoha.jp/docs/neutron-get_members_list.php
   */
  // TODO: implementation

  /**
   * REAL（member）詳細取得
   * @description https://www.conoha.jp/docs/neutron-get_members_detail_specified.php
   */
  // TODO: implementation

  /**
   * REAL（member）追加
   * @description https://www.conoha.jp/docs/neutron-add_member.php
   */
  // TODO: implementation

  /**
   * REAL(member)更新
   * @description https://www.conoha.jp/docs/neutron-update_member.php
   */
  // TODO: implementation

  /**
   * REAL(member)削除
   * @description https://www.conoha.jp/docs/neutron-remove_member.php
   */
  // TODO: implementation

  /**
   * ヘルスモニタ一覧取得
   * @description https://www.conoha.jp/docs/neutron-get_healthmonitors_list.php
   */
  // TODO: implementation

  /**
   * ヘルスモニタ詳細取得
   * @description https://www.conoha.jp/docs/neutron-get_healthmonitors_detail_specified.php
   */
  // TODO: implementation

  /**
   * ヘルスモニタ作成
   * @description https://www.conoha.jp/docs/neutron-create_health_monitor.php
   */
  // TODO: implementation

  /**
   * ヘルスモニタ変更
   * @description https://www.conoha.jp/docs/neutron-change_health_monitor.php
   */
  // TODO: implementation

  /**
   * ヘルスモニタ削除
   * @description https://www.conoha.jp/docs/neutron-delete_health_monitor.php
   */
  // TODO: implementation

  /**
   * ヘルスモニタの関連付け
   * @description https://www.conoha.jp/docs/neutron-set_health_monitor_on_pool.php
   */
  // TODO: implementation

  /**
   * ヘルスモニタの関連付け解除
   * @description https://www.conoha.jp/docs/neutron-deallocate_health_monitor.php
   */
  // TODO: implementation

  /**
   * セキュリティグループ一覧取得
   * @description https://www.conoha.jp/docs/neutron-get_secgroups_list.php
   */
  // TODO: implementation

  /**
   * セキュリティグループ詳細取得
   * @description https://www.conoha.jp/docs/neutron-get_secgroups_detail_specified.php
   */
  // TODO: implementation

  /**
   * セキュリティグループ作成
   * @description https://www.conoha.jp/docs/neutron-create_secgroup.php
   */
  // TODO: implementation

  /**
   * セキュリティグループ更新
   * @description https://www.conoha.jp/docs/neutron-update_secgroup.php
   */
  // TODO: implementation

  /**
   * セキュリティグループ削除
   * @description https://www.conoha.jp/docs/neutron-delete_secgroup.php
   */
  // TODO: implementation

  /**
   * セキュリティグループ ルール一覧取得
   * @description https://www.conoha.jp/docs/neutron-get_rules_on_secgroup.php
   */
  // TODO: implementation

  /**
   * セキュリティグループ ルール詳細取得
   * @description https://www.conoha.jp/docs/neutron-get_rules_detail_specified.php
   */
  // TODO: implementation

  /**
   * セキュリティグループ ルール作成
   * @description https://www.conoha.jp/docs/neutron-create_rule_on_secgroup.php
   */
  // TODO: implementation

  /**
   * セキュリティグループ ルール削除
   * @description https://www.conoha.jp/docs/neutron-delete_rule_on_secgroup.php
   */
  // TODO: implementation

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

  /****************************************************************************/
  /* Mail                                                                     */
  /****************************************************************************/
  /**
   * バージョン情報取得
   * @description https://www.conoha.jp/docs/paas-mail-get-version-list.php
   */
  // TODO: implementation

  /**
   * バージョン情報詳細取得
   * @description https://www.conoha.jp/docs/paas-mail-get-version-detail.php
   */
  // TODO: implementation

  /**
   * サービス作成
   * @description https://www.conoha.jp/docs/paas-mail-create-mail-service.php
   */
  // TODO: implementation

  /**
   * サービス一覧取得
   * @description https://www.conoha.jp/docs/paas-mail-list-mail-service.php
   */
  // TODO: implementation

  /**
   * サービス情報取得
   * @description https://www.conoha.jp/docs/paas-mail-get-service.php
   */
  // TODO: implementation

  /**
   * サービス更新
   * @description https://www.conoha.jp/docs/paas-mail-update-mail-service.php
   */
  // TODO: implementation

  /**
   * バックアップ(有効/無効)
   * @description https://www.conoha.jp/docs/paas-mail-create-backup.php
   */
  // TODO: implementation

  /**
   * サービス削除
   * @description https://www.conoha.jp/docs/paas-mail-delete-mail-service.php
   */
  // TODO: implementation

  /**
   * サービスメタデータ更新
   * @description https://www.conoha.jp/docs/paas-mail-update-mail-service-metadata.php
   */
  // TODO: implementation

  /**
   * メール上限値取得
   * @description https://www.conoha.jp/docs/paas-mail-get-email-quotas.php
   */
  // TODO: implementation

  /**
   * メール上限値変更
   * @description https://www.conoha.jp/docs/paas-mail-update-email-quotas.php
   */
  // TODO: implementation

  /**
   * ドメイン作成
   * @description https://www.conoha.jp/docs/paas-mail-create-domain.php
   */
  // TODO: implementation

  /**
   * ドメイン一覧取得
   * @description https://www.conoha.jp/docs/paas-mail-list-domain.php
   */
  // TODO: implementation

  /**
   * ドメイン削除
   * @description https://www.conoha.jp/docs/paas-mail-delete-domain.php
   */
  // TODO: implementation

  /**
   * ドメインの個別IP割り当て情報取得
   * @description https://www.conoha.jp/docs/paas-mail-get-dedicated-ip.php
   */
  // TODO: implementation

  /**
   * ドメインの個別IP割り当て（登録/解除）
   * @description https://www.conoha.jp/docs/paas-mail-create-dedicated-ip.php
   */
  // TODO: implementation

  /**
   * DKIM情報取得
   * @description https://www.conoha.jp/docs/paas-mail-get-dkim.php
   */
  // TODO: implementation

  /**
   * DKIM設定（有効/無効）
   * @description https://www.conoha.jp/docs/paas-mail-create-dkim.php
   */
  // TODO: implementation

  /**
   * メールアドレス作成
   * @description https://www.conoha.jp/docs/paas-mail-create-email.php
   */
  // TODO: implementation

  /**
   * メールアドレス一覧取得
   * @description https://www.conoha.jp/docs/paas-mail-list-email-domains.php
   */
  // TODO: implementation

  /**
   * メールアドレス情報取得
   * @description https://www.conoha.jp/docs/paas-mail-get-email.php
   */
  // TODO: implementation

  /**
   * メールアドレス削除
   * @description https://www.conoha.jp/docs/paas-mail-delete-email.php
   */
  // TODO: implementation

  /**
   * メールアドレスパスワード変更
   * @description https://www.conoha.jp/docs/paas-mail-update-email-password.php
   */
  // TODO: implementation

  /**
   * 迷惑メールフィルタ（有効/無効）
   * @description https://www.conoha.jp/docs/paas-mail-create-email-spam-filter.php
   */
  // TODO: implementation

  /**
   * メール転送設定変更
   * @description https://www.conoha.jp/docs/paas-mail-create-email-forwarding-copy.php
   */
  // TODO: implementation

  /**
   * メッセージ一覧取得
   * @description https://www.conoha.jp/docs/paas-mail-list-messages.php
   */
  // TODO: implementation

  /**
   * メッセージ取得
   * @description https://www.conoha.jp/docs/paas-mail-get-messages.php
   */
  // TODO: implementation

  /**
   * メッセージ添付ファイル取得
   * @description https://www.conoha.jp/docs/paas-mail-get-messages-attachments.php
   */
  // TODO: implementation

  /**
   * メッセージ削除
   * @description https://www.conoha.jp/docs/paas-mail-delete-messages.php
   */
  // TODO: implementation

  /**
   * 自動実行作成
   * @description https://www.conoha.jp/docs/paas-mail-create-email-webhook.php
   */
  // TODO: implementation

  /**
   * 自動実行情報取得
   * @description https://www.conoha.jp/docs/paas-mail-list-email-filter.php
   */
  // TODO: implementation

  /**
   * 自動実行更新
   * @description https://www.conoha.jp/docs/paas-mail-update-email-filter.php
   */
  // TODO: implementation

  /**
   * 自動実行削除
   * @description https://www.conoha.jp/docs/paas-mail-delete-email-filter.php
   */
  // TODO: implementation

  /**
   * 迷惑メールフィルタ許可一覧取得
   * @description https://www.conoha.jp/docs/paas-mail-list-email-whitelist.php
   */
  // TODO: implementation

  /**
   * 迷惑メールフィルタ許可リスト更新
   * @description https://www.conoha.jp/docs/paas-mail-update-email-whitelist.php
   */
  // TODO: implementation

  /**
   * 迷惑メールフィルタ拒否一覧取得
   * @description https://www.conoha.jp/docs/paas-mail-list-email-blacklist.php
   */
  // TODO: implementation

  /**
   * 迷惑メールフィルタ拒否リスト更新
   * @description https://www.conoha.jp/docs/paas-mail-update-email-blacklist.php
   */
  // TODO: implementation

  /**
   * メール転送追加
   * @description https://www.conoha.jp/docs/paas-mail-create-email-forwarding.php
   */
  // TODO: implementation

  /**
   * メール転送先一覧取得
   * @description https://www.conoha.jp/docs/paas-mail-list-email-forwarding.php
   */
  // TODO: implementation

  /**
   * メール転送情報取得
   * @description https://www.conoha.jp/docs/paas-mail-get-email-forwarding.php
   */
  // TODO: implementation

  /**
   * メール転送先変更
   * @description https://www.conoha.jp/docs/paas-mail-update-email-forwarding.php
   */
  // TODO: implementation

  /**
   * メール転送解除
   * @description https://www.conoha.jp/docs/paas-mail-delete-email-forwarding.php
   */
}
