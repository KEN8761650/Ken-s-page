// console就是print
console.log("Hello,JS")
// JS撰寫的東西會在主控台出現
console.log("hi,JS")


// 變數宣告( var, const, let)
let name="ken"
console.log(name)
// output ken
let sentence="How are u? Nice to meet you. Have a good day."
console.log(name+sentence)
// output kenHow are u? Nice to meet you. Have a good day.


// 內建方法[ promt(), alert() ]
  // fruit=prompt("你最喜歡甚麼水果?")
  // console.log(fruit)
  // 瀏覽器出現對話框 輸入蘋果 output蘋果在主控台

// alert(fruit)
  // 瀏覽器出現對話框 輸入蘋果 output蘋果在主控台
  // 之後便會出現警示


// 小費計算器
let food=parseInt(prompt("這餐花費多少"))
let tippercentage=parseInt(prompt("小費幾趴"))/100
let tipamount=food*tippercentage
let total=food+tipamount
console.log("小費金額="+tipamount)
console.log("總金額="+total)

// let tippercentage = parseInt(prompt("小費幾趴")) / 100
   // 在這裡，prompt("小費幾趴") 先被執行，這會顯示一個提示框讓使用者輸入數字。
//    接下來，parseInt() 將使用者的輸入（通常是字串）轉換成整數。最後，整數結果會被除以 100。
   // 比如，如果使用者輸入 "15"，這行代碼的結果是 0.15。

// let tippercentage = parseInt(prompt("小費幾趴") / 100)
   // 在這裡，prompt("小費幾趴") 依然會先執行，並顯示提示框。但隨後，使用者輸入的數字會直接被除以 100，然後再將結果傳入 parseInt()。
   // 比如，如果使用者輸入 "15"，首先會計算 15 / 100 = 0.15，然後 parseInt(0.15) 會把 0.15 轉換成整數 0。
   // 因此這行代碼的結果是 0。