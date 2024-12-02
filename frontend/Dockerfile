# ベースイメージを指定
FROM node:20

# 作業ディレクトリを指定
WORKDIR /usr/src/app

# 依存関係をインストール（ローカルでは不要）
# COPY package.json ./
# COPY package-lock.json ./
# RUN npm install

# アプリケーションコードをコピー（ローカルでは不要）
# COPY . .

# ビルド
# RUN npm run build

# ポートを公開
EXPOSE 3000

# コマンドを実行
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
