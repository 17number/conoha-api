import CoNoHaIdentityAPI from "./conoha_identity_api";

export default class CoNoHaNetworkAPI extends CoNoHaIdentityAPI {
  constructor(username = "", password = "", region = "tyo1", tenant_id = "") {
    super(username, password, region, tenant_id);
    this.endpoint = `https://networking.${this.region}.conoha.io`;
  }

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
}
