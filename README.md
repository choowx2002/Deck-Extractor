# Deck Extractor 插件

一个简洁的浏览器扩展，可从 [静寂森林卡组网站](https://staticaforestcard.com/) 提取卡牌列表，支持一键复制。

---

## 🧩 功能简介

- 支持从网页中提取当前卡组名称与数量
- 点击按钮即可复制卡组内容到剪贴板
- 零依赖、隐私友好，无需联网

---

## 🔧 安装方法（通过 `.zip` 导入）

### Chrome / Edge 安装步骤：

1. 下载并解压插件包（`.zip`）
2. 打开浏览器并进入扩展页面：
   - Chrome 地址栏输入：`chrome://extensions/`
   - Edge 地址栏输入：`edge://extensions/`
3. **开启右上角的“开发者模式”**
4. 点击「加载已解压的扩展程序」
5. 选择你解压后的插件文件夹（包含 manifest.json 的那一层）

成功后即可看到插件图标 🎯

---

### Firefox 安装步骤：

1. 下载 `.zip` 并解压
2. 打开 Firefox 并输入 `about:debugging#/runtime/this-firefox`
3. 点击「加载临时附加组件」
4. 选择解压目录下的 `manifest.json` 文件

> 注意：Firefox 使用这种方式加载的插件仅在本次会话中有效，重启浏览器后需要重新加载。若需长期使用，建议[提交插件到 AMO](https://addons.mozilla.org/)或使用开发者模式。

---

## 使用说明

1. 进入某个卡组页面，例如：https://staticaforestcard.com/decks/24426
2. 手动点击网页中的「查看」按钮
3. 点击 layout 切换按钮（bars 图标）
4. 点击浏览器右上角的插件图标
5. 插件将显示卡牌列表，点击“复制”按钮即可复制文本

---

## 权限说明

插件使用以下权限，仅用于必要功能：

| 权限 | 用途 |
|------|------|
| `activeTab` | 访问当前标签页的卡牌页面 |
| `scripting` | 注入 JS 提取卡牌数据 |
| `clipboardWrite` | 将卡组复制到剪贴板 |

> 本插件不会收集、存储或上传任何用户数据，全部处理均在本地浏览器完成。