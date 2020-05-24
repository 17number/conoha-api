import CoNoHaIdentityAPI from "./conoha_identity_api";

export default class CoNoHaMailAPI extends CoNoHaIdentityAPI {
  constructor(username = "", password = "", region = "tyo1", tenant_id = "") {
    super(username, password, region, tenant_id);
    this.endpoint = `https://mail-hosting.${this.region}.conoha.io`;
  }

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
  // TODO: implementation
}
