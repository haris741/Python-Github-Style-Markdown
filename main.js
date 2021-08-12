let codeSnippets = document.getElementsByClassName('code-snippet');
for (let i = 0; i < codeSnippets.length; i++)
    processRawCode(codeSnippets[i]); 

function processRawCode(codeSnippet){

    let rawCode = codeSnippet.textContent;
    rawCode = rawCode.split("\n");
    let numberOfLines = rawCode.length;
    
    codeSnippet.innerHTML = "";

    let snippetHeader = document.createElement('div');
    snippetHeader.className = 'header';
    codeSnippet.appendChild(snippetHeader);

    let snippetBody = document.createElement('table');
    codeSnippet.appendChild(snippetBody);

    let snippetSize = 0;
    for(let i = 0; i < rawCode.length; i++) {
        let row = snippetBody.appendChild(document.createElement('tr'));
        let lineNumber = row.appendChild(document.createElement('td'));
        lineNumber.className = 'line-num';
        lineNumber.innerHTML = i + 1;

        let lineCode = row.appendChild(document.createElement('td'));
        lineCode.className = 'line-code';
        lineCode.innerHTML = rawCode[i];

        snippetSize += rawCode[i].length;
    }
    
    snippetHeader.innerHTML = numberOfLines + " lines " + " | " + getSizeUnit(snippetSize);
}

function getSizeUnit(snippetSize){

    let units = ['Bytes', 'KB', 'MB'];
    let steps = 0;
    while(snippetSize >= 1024){
        snippetSize /= 1024;
        snippetSize = Math.round(snippetSize * 100)/100
        steps++;
    }
    
    return snippetSize + " " + units[steps];
}