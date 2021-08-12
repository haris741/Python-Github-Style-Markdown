<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="style.css?v=<?php echo time(); ?>">
    <title>Python Github Style Markdown</title>

    <style>
        h1 {
            margin: 20px;
            font-family: ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;
        }
    </style>
</head>
<body>

    <h1>GitHub style markdown > Python code fences support for Websites</h1>
    <pre class="code-snippet">import pandas as pd
import numpy as numpy</pre>

    <pre class="code-snippet">def funny():
    x = int(input())
    if x % 2 == 0 and x > 2:
        print("Even Greater than 2!")
    elif:
        print("Hmmmmm...")
    for i in range(10):
        break
        continue
    return False == True and None</pre>
    <script src="main.js"></script>
</body>
</html>