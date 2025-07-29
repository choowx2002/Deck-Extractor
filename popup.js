document.addEventListener("DOMContentLoaded", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  // 执行一段 JS，在页面中运行
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      const cards = document.querySelectorAll(".layout-list");
      const result = [];

      cards.forEach(card => {
        const qtyRaw = card.querySelector("div")?.innerText?.trim();
        const qty = qtyRaw?.replace("x", "").trim();
        const name = card.querySelector(".name")?.innerText?.trim();
        if (qty && name) {
            if(name.includes("（异画）")){
                const index = name.indexOf("（异画）");
                let name2 = name.substring(0, index); 
                result.push(`${name2}-${qty}-2`);
            } else {
                result.push(`${name}-${qty}-1`);
            }
        }
      });

      return result;
    }
  }, (results) => {
    const deck = results[0]?.result || [];
    document.getElementById("deck").textContent = deck.length > 0
      ? deck.join(" ")
      : "⚠️ 请先手动点击页面中的『查看』按钮和 layout 图标，再点击插件按钮提取卡组。";

    document.getElementById("copy").onclick = () => {
      navigator.clipboard.writeText(deck.join(" "));
      alert("卡组已复制！");
    };
  });
});
