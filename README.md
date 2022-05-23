## 全体情報(仮)
Node.js 16
Next.js 12

## 環境構築
### Dockerわかる人
```
docker-compose build
docker-compose up -d
docker-compose exec app npm install
```

### Dockerない人(仮)
書くかどうか未定
詳しく書くのは大変

## サーバー起動
### Dockerわかる人
```
docker-compose exec app npm run dev
```

## アクセス
`http://localhost:3000`

## 適宜実行
### package.jsonが変更されたら
```
docker-compose exec app npm install
```
