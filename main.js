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

    let snippetBodyDiv = document.createElement('div');
    snippetBodyDiv.className = 'body';
    codeSnippet.appendChild(snippetBodyDiv);

    let snippetBody = document.createElement('table');
    snippetBodyDiv.appendChild(snippetBody);

    let snippetSize = 0;
    for(let i = 0; i < rawCode.length; i++) {
        let row = snippetBody.appendChild(document.createElement('tr'));
        let lineNumber = row.appendChild(document.createElement('td'));
        lineNumber.className = 'line-num';
        lineNumber.innerHTML = i + 1;

        let lineCode = row.appendChild(document.createElement('td'));
        lineCode.className = 'line-code';
        lineCode.innerHTML = styleKeywords(rawCode[i]);

        snippetSize += rawCode[i].length;
    }

    snippetHeader.innerHTML = numberOfLines + " lines " + " | " + getSizeUnit(snippetSize);
}

function isKeyword(line, stIndex, endIndex) {

    if (stIndex == 0) {
        if (endIndex + 1 == line.length) return true;
        else {
            if (line[endIndex + 1] == ' ' || line[endIndex + 1] == ':') return true;
            else return false;
        }
    }
    else {
        if (line[stIndex - 1] != ' ') return false;
        else {
            if (endIndex + 1 == line.length) return true;
            else
            {
                if (line[endIndex + 1] == ' ' || line[endIndex + 1] == ':') return true;
                else return false;
            }
        }

    }
}

function styleKeywords(line){
    let redKeywords = ['as', 'assert', 'async', 'await','break', 'class', 'continue', 'def', 'elif', 'except', 'for', 'global', 'if', 'import', 'lambda', 'nonlocal', 'return', 'with', 'yield'];
    let blueKeywords = ['False', 'in', 'is', 'not', 'None', 'True']
	var words = line.split(' ');

    for(let i = 0; i < redKeywords.length; i++) {
        /*let stIndex = line.search(redKeywords[i]);
        let endIndex = stIndex + redKeywords[i].length - 1;
        if (stIndex != -1  && isKeyword(line, stIndex, endIndex)) {
            line = line.substring(0, stIndex) + "<span style='color: rgb(207, 34, 46);'>" + line.substring(stIndex, stIndex + redKeywords[i].length) + "</span>" + line.substring(stIndex + redKeywords[i].length, line.length);
        }*/
		var index= 0;
		for(let j=0; j< words.length; j++){
      words[j]=words[j].replace(/[^a-zA-Z ]/g, "")

			if( words[j]== redKeywords[i]){
      console.log("1"+line);
      console.log(words[j]);
			line2 = line.substring(0, index) + "<span style='color: rgb(207, 34, 46);'>" + line.substring(index, index + redKeywords[i].length) + "</span>";
      line2= line2+ line.substring(index + redKeywords[i].length, line.length);
      index+=line2.length;
      line=line2;
      console.log("2"+line);
      }
			index+=words[j].length;
			index++;
		}

    }

    for(let i = 0; i < blueKeywords.length; i++) {
        let stIndex = line.search(blueKeywords[i]);
        let endIndex = stIndex + blueKeywords[i].length - 1;
        if (stIndex != -1 && isKeyword(line, stIndex, endIndex)) {
            line = line.substring(0, stIndex) + "<span style='color: rgb(5, 80, 174);'>" + line.substring(stIndex, stIndex + blueKeywords[i].length) + "</span>" + line.substring(stIndex + blueKeywords[i].length, line.length);
        }
    }

    // Styling Comment
    let found = line.search("#");
    if (found != -1) {
        comment = line.substring(found, line.length);
        comment = comment.replace(/<\/?[^>]+(>|$)/g, "");
        line = line.substring(0, found) + "<span style='color: rgb(110, 119, 129);'>" + comment + "</span>";
    }

    return line;
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
