# CoNoHa API(WIP)

[ConoHa API Documentation](https://www.conoha.jp/docs/)

## Env

|Name|Description
|:--|:--
|`CONOHA_USERNAME`|API ユーザー名
|`CONOHA_PASSWORD`|API ユーザー パスワード
|`CONOHA_REGION`|リージョン名(`tyo1`, `tyo2`, `sin1`, ...)
|`CONOHA_TENANT_ID`|テナント ID

## Build

`dist` に出力。

```bash
npm run build
```

## Run(Example code)

認証が必要な API は事前に[環境変数](#Env)の設定が必要。

```
export CONOHA_USERNAME="your_username"
export CONOHA_PASSWORD="your_password"
export CONOHA_REGION="your_region"
export CONOHA_TENANT_ID="your_tenant_id"
```

サンプルコード(example.js)の実行。

```bash
npm run start
```
