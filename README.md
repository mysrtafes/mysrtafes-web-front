## 全体情報(仮)

Node.js 16  
Next.js 12

## 環境構築

### Docker わかる人

```
docker-compose build
docker-compose up -d
docker-compose exec app npm install
```

### Docker ない人(仮)

Node.js の 16 を環境にインストールし、`npm install`

### 共通

```
cp .env .env.example
```

## サーバー起動

### Docker わかる人

```
docker-compose exec app npm run dev
```

### Docker ない人

```
npm run dev
```

## アクセス

`http://localhost:3000`

## 適宜実行

### package.json が変更されたら

```
docker-compose exec app npm install
```

## API(暫定)

### 仕様

仮で API を作成中

prisma で DB にデータ放り込むだけの API

一旦 Next.js に全ての責任を任せているが、API サーバーを別途立てても良いので、いつでも本リポジトリの API は捨てれる準備をしておく
