## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。


## 請問什麼是盒模型（box modal）
在 CSS 裡面，html的每個元素都可被視作為一個盒子，然後可以針對這個盒子去做調整。而其最終寬度及高度都會受到padding(內距)以及border(邊框)影響，但不受margin(外距)影響。

為了不讓padding和border影響到長寬，常常會使用box-sizing:border-box，便可以無須加總計算，設定後的width及height皆為最終寬度，使其不會被這兩個因素干擾。

## 請問 display: inline, block 跟 inline-block 的差別是什麼？
inline: 
* 元素可在同一行內呈現，圖片或文字均不換行，也不會影響其版面配置
* 不可設定長寬，元素的寬高由它的內容撐開
* 雖有設定padding及margin，但元素上下並不會把其他行推開，但若設定框線或背景顏色就會發現事實上會使得其他行被蓋到。

block:
* 元素寬度預設會撐到最大，使其占滿整個容器
* 可以設定長寬/margin/padding，但仍會占滿一整行

inline-block:
* 可水平排列，以inline的方式呈現，但同時擁有block的屬性
* 可設定元素的寬高/margin/padding


## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？
static:
屬於預設屬性，會照著瀏覽器預設的配置自動排版在頁面上。

relative:
表現的和 static 一樣，除非你增加了一些額外的屬性。比如說特別設定他的定位：top、bottom、left、right等，不管他移動到哪邊，都不會影響到後面物件的位置，只有他自己本身會移動。

absolute:
如果這個套用position: absolute，但其上層容器並沒有「可以被定位」的元素的話，那麼這個元素的定位就是相對於該網頁所有內容（也就是 <body> 元素）最左上角的絕對位置，看起來就是這張網頁的絕對位置一樣，所以當你的畫面在捲動時，該元素還是會隨著頁面捲動。通常比較常會使用relative包住absolute的方式做版面切版。

fixed:
會相對於瀏覽器視窗來定位，這意味著即便頁面捲動，它還是會固定在相同的位置。可使用top、bottom、left、right屬性來定位。
