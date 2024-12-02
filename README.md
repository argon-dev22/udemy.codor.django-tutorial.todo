# TODO アプリケーション

## 概要

このプロジェクトは、Django を使用した TODO アプリケーションです。フロントエンドは React を使用しています。

## 前提条件

- Docker がインストールされていること

## 1. リポジトリをクローン

### SSH

```
git clone git@github.com:<username>/udemy.codor.django-tutorial.todo.git
```

### HTTPS

```
git clone https://github.com/<username>/udemy.codor.django-tutorial.todo.git
```

## 2. 環境変数の設定

frontend と backend でそれぞれ`.env.example` をコピーして `.env` を作成し、環境変数を設定する。

## 3. ライブラリのインストール（フロントエンド）

バックエンドのライブラリは自動でインストールされるため、フロントエンドのライブラリのみインストールする。

```
docker compose run frontend npm install
```

## 4. コンテナを起動

```
docker compose up -d --build
```

## 5. ブラウザで確認

http://localhost:3000/

## その他のコマンド

### コンテナ内でコマンドを実行

#### フロントエンド

```
docker compose exec frontend <コマンド>
```

#### バックエンド

```
docker compose exec backend <コマンド>
```

### コンテナの停止 & 削除

```
docker compose down
```

### ログを確認

トラブルシューティングの際は、ログを確認してください。

```
docker compose logs -f
```
