# Aitchison Distance
my page
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>What is Aitchison Distance</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.5;
            margin: 0;
            padding: 20px;
            background-color: #f9f9f9;
        }
        .box1, .box2 {
            width: 100%;
            max-width: 1500px;
            margin: 20px auto;
            background-color: #ffcc80;
            border: 1px solid #333;
            padding: 15px;
            box-sizing: border-box;
        }
        h1 {
            font-size: 5em;
            color: blue;
            background-color: aqua;
            border: 2px solid red;
            padding: 10px;
            margin-bottom: 15px;
            text-align: center;
        }
        h2 {
            font-size: 5em;
            color: blue;
            background-color: aqua;
            border: 2px solid red;
            padding: 10px;
            text-align: center;
        }
        p {
            font-size: 2em;
            color: #333;
            margin: 0 0 15px;
        }
    </style>
</head>
<body>
    <h1 class="box1">What is Aitchison Distance</h1>
    <p>
        Aitchison 距離是一種專門用於分析組成數據（如相對豐度數據）的距離度量方法，廣泛應用於微生物生態學和基因組學研究中。<br>
        組成數據（compositional data）中的數值代表了相對比例，例如樣本中不同細菌的相對豐度，這些數據具有總和為常數的特性（如 100%）。<br>
        直接使用歐幾里得距離等標準距離度量會導致失真，因為組成數據受到“閉合效應”的影響：一種細菌的相對豐度增加會影響其他細菌的相對豐度，即數據之間存在依賴性。<br>
        Aitchison 距離透過對數變換（log-ratio transformation）解決這個問題，將相對豐度數據轉換為適合比較的數據。<br>
        這樣，Aitchison 距離能夠更準確地反映樣本間的組成差異，對研究微生物組成變化及其與環境或宿主的關係特別有效。
    </p>
    <h2 class="box2">日本語</h2>
    <div>
        <p>
            Aitchison距離は、構成データ（例えば相対的な豊富さのデータ）を分析するために特化された距離測定法です。<br>
            微生物生態学やゲノミクス研究で広く使われています。構成データ（compositional data）とは、異なる細菌の相対的な割合を示すデータで、データの合計が一定の値（例えば100%）になる特性を持ちます。<br>
            標準的なユークリッド距離などを直接使用すると、「閉鎖効果」と呼ばれる影響によりデータが歪む可能性があります。これは、ある細菌の相対的な豊富さが増加すると他の細菌の相対的な豊富さが減少するという依存性があるためです。<br>
            Aitchison距離は、ログ比変換（log-ratio transformation）を使用してこの問題を解決し、相対的な豊富さデータを比較しやすい形式に変換します。<br>
            これにより、サンプル間の構成の違いがより正確に反映され、微生物の構成変化や環境や宿主との関係を調べる際に特に有効です。
        </p>
    </div>
</body>
</html>
