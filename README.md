ITP 2.3検証ツール
==================

ITP 2.2のリンクデコレーションに対する制約と、リファラに対する制約を検証するためのファイル群。


初期設定と起動
------------

### hostsファイルへのホスト名登録

UNIX系(Mac含む)であれば/etc/hostsファイルに下記の行を追加します。その他の環境では同様の設定を**追加**してください。

```/etc/hosts
127.0.0.1 3rdpartytestwebkit.org
127.0.0.1 1stparty.localdomain
```


### npm packageのインストール

```bash
$ npm install
```

* 事前にNodeの実行環境が必要です


### サーバの起動

```
$ npm run up
```

* 停止はCtrl-cで


アクセスとテスト
-------------------

`http://localhost`にSafariでアクセスして説明を読み、`start`ボタンを押してください。


