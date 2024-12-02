# ベースイメージを指定
FROM python:3.10-slim

# 作業ディレクトリを指定
WORKDIR /usr/src/app

# 必要なパッケージをインストール
RUN apt-get update && apt-get install -y \
    build-essential \
    && apt-get clean

# 依存関係をインストール
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# アプリケーションコードをコピー（ローカルでは不要）
# COPY . .

# ポートを公開
EXPOSE 8000

# コマンドを実行
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
