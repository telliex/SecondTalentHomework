```
## 任務

### STEP1: 在本機架構起 Magento2 opensource版本:  在你的本地開發環境中架設一個 Magento2 實例

使用 <https://github.com/markshust/docker-magento> 進行搭建 Mangento `v2.4.7`。

事前準備：

1. 安裝前請先確保本地的 php , MySQL, apache 等服務都已關閉。待會建立 Magento 時，Docker 會需要這些 port號。
2. 安裝 Docker
3. 註冊與登入 magento market , 取得公鑰（user）與私鑰（password）

安裝

1. Create your project directory then go into it:
```

mkdir -p ~/Sites/magento

```
2. 安裝 magento
```

cd magento

```
```shell notranslate position-relative overflow-auto
curl -s https://raw.githubusercontent.com/markshust/docker-magento/master/lib/onelinesetup | bash -s -- magento.test 2.4.7 community
```

3. 建立
   - 前端頁面：[https://mabento2.test/](https://mabento2.test/)
   - 後台：[https://mabento2.test/](https://mabento2.test/)
   - phpMyadmin: [http://localhost:8080](http://localhost:8080)

4.建立後台使用者

```
bin/create-user
```

5,有異動會更新代碼時，執行

```
bin/magento setup:upgrade
```

6.其他

- 關閉 2FA

1. **app/etc/config.php**
2. 找到 **`'Magento_TwoFactorAuth' => 1`** 并将其更改为  **`'Magento_TwoFactorAuth' => 0`** 。

### STEP2: 設計稿取得

設計稿 : [https://www.figma.com/community/file/1244387477432458401/ecommerce-template-simplewood-theme-full-magento-2?searchSessionId=lvq85029-e5ow23htp4](https://www.figma.com/community/file/1244387477432458401/ecommerce-template-simplewood-theme-full-magento-2?searchSessionId=lvq85029-e5ow23htp4)

### STEP3: 設計稿實現

目前以 react 框架建立產品列表頁與產品詳細頁，

1. 實作 RWD (>769px & < 768px)。
2. 套用 API , API 不具備的 data ,以 hard code 處理。
3. 套用 SCSS 並使用 SCSS 變數。
4. 以 react 框架簡單搭建，預覽方式如下。

HTML 架構不是未精簡，乃參考 Luma 主題去調整。故有看似冗余的 HTML & CSS Naming.

理解頁面的互動功能（如排序與換頁）是放進 magento 主題去套用 function 實踐，故未在此 demo 裡實現。

#### Install

```
npm install
```

#### npm run build

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

```
npm run
```
