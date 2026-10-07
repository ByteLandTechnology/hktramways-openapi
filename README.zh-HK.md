# HK Tramways OpenAPI (非官方)

[English](README.md) | 繁體中文

---

本倉庫提供香港電車流動端後端 API 的非官方 OpenAPI 3.0 規範。
它包含 TypeScript SDK 與構建工具。

作者通過觀察公開網絡協議流量編寫了本規範，僅用於技術互操作性研究。
所有架構定義均與生產環境的實時服務器響應相符。

---

## 免責聲明與使用條款

1. **無隸屬關係**：
   「香港電車」、「Ding Ding」及相關品牌名稱均為香港電車有限公司的商標。
   本項目為獨立的社群項目。
   它與香港電車有限公司無任何關聯。
2. **商標聲明**：
   所有商標均歸其各自所有者所有。
   本項目僅在指示性合理使用下使用這些標識進行識別。
3. **研究目的**：
   本規範僅用於學習、研究和技術互操作性。
4. **請求頻率與合理使用**：
   官方服務器不發布服務水準協議。
   官方流動應用程式每 15 秒請求一次數據。
   切勿將本規範用於商業運營、自動化抓取或拒絕服務測試。
5. **無擔保與責任限制**：
   作者按「原樣」提供本規範與客戶端代碼，不提供任何形式的擔保。
   作者不託管亦不運營官方服務器。
   作者對使用本項目造成的任何服務中斷或法律後果概不承擔責任。

---

## TypeScript SDK

使用 npm 安裝套件：

```bash
npm install hktramways-openapi
```

### 客戶端調用範例

```typescript
import { getTramETA } from 'hktramways-openapi';

// 直接調用自動生成的具名函數獲取實時電車到達時間
const res = await getTramETA('76W', 'westbound');

if (res.data?.success) {
  for (const eta of res.data.data.etas) {
    console.log(`目的地: ${eta.destination} | 到站時間: ${eta.arriving_in} 分鐘`);
  }
}
```

---

## 快速開始

### 本地開發

運行以下命令以設置並構建項目：

```bash
git clone https://github.com/ByteLandTechnology/hktramways-openapi.git
cd hktramways-openapi
npm install

npm run dev         # 啟動 Scalar 實時測試服務器（英文）
npm run dev:zh      # 啟動 Scalar 實時測試服務器（繁體中文）
npm run lint        # 驗證 OpenAPI 文件結構合規性（英文）
npm run lint:zh     # 驗證 OpenAPI 文件結構合規性（繁體中文）
npm run bundle      # 打包英文規範至 JSON
npm run bundle:zh   # 打包繁體中文規範至 JSON
npm run build       # 構建 TypeScript SDK
```

### 快速 cURL 測試

在終端中運行此命令以獲取實時到達數據：

```bash
curl -H "Accept: application/json" \
  "https://api.hktramways.com/api/v1/tram-eta/76W/westbound"
```

---

## 端點概覽

基礎 URL：`https://api.hktramways.com/api/v1`

| 端點 | 方法 | 說明 |
|---|---|---|
| `/home` | `GET` | 靜態數據：車站、總站、地區、新聞標籤與橫幅 |
| `/tram-eta/{stationCode}/{direction}` | `GET` | 實時到達預估（`direction`：`westbound` 或 `eastbound`） |
| `/news` · `/news/{id}` | `GET` | 帶分頁的新聞文章 |
| `/notices` · `/notices/general` · `/notices/{stationCode}` | `GET` | 服務通告與乘客警示 |
| `/tram-tour` · `/tour-events/{id}` | `GET` | 觀光電車行程活動與時間表 |
| `/app-config` | `GET` | 應用程式配置與路線顏色 |

---

## 版本自動化發布 (Release Automation)

本倉庫使用 Google 開源的 [Release Please](https://github.com/googleapis/release-please)（`.github/workflows/release.yml`），基於 Conventional Commits 規範自動化管理語義版本號、生成 CHANGELOG 與建立 GitHub Release。

---

## 授權條款 (License)

本項目採用 [MIT 許可證](LICENSE) 授權。
