codeSnippets = document.getElementsByClassName('code-snippet');
for (i = 0; i < codeSnippets.length; i++)
    processRawCode(codeSnippets[i]); 

function processRawCode(codeSnippet){

    rawCode = codeSnippet.innerHTML;
    rawCode = rawCode.split("\n");
    numberOfLines = rawCode.length;
    
    codeSnippet.innerHTML = "";

    snippetHeader = document.createElement('div');
    snippetHeader.className = 'header';
    codeSnippet.appendChild(snippetHeader);

    snippetBody = document.createElement('table');
    codeSnippet.appendChild(snippetBody);

    snippetSize = 0;
    for(j = 0; j < rawCode.length; j++) {
        row = snippetBody.appendChild(document.createElement('tr'));
        lineNumber = row.appendChild(document.createElement('td'));
        lineNumber.className = 'line-num';
        lineNumber.innerHTML = j + 1;

        lineCode = row.appendChild(document.createElement('td'));
        lineCode.className = 'line-code';
        lineCode.innerHTML = rawCode[j];

        snippetSize += rawCode[j].length;
    }
    
    snippetHeader.innerHTML = numberOfLines + " lines " + " | " + getSizeUnit(snippetSize);
}

function getSizeUnit(snippetSize){

    units = ['Bytes', 'KB', 'MB'];
    steps = 0;
    while(snippetSize >= 1024){
        snippetSize /= 1024;
        snippetSize = Math.round(snippetSize * 100)/100
        steps++;
    }
    
    return snippetSize + " " + units[steps];
}