function analyz() {
    let inputText = document.getElementById("inputText").value;
    let textLen = inputText.length;
    let space = 0;
    let vowel = 0;
    const vowels = "aiueo";
    for (let i = 0; i < textLen; i++) {
        if (inputText[i] == " "){
            space++;
        }
        
        if (vowels.includes(inputText[i].toLowerCase())) {
            vowel++;
        }
    }

    document.getElementById("showLen").innerHTML =`length of text = ${textLen - space}`;
    document.getElementById("showSpace").innerHTML = `space = ${space}`;
    document.getElementById("showVowel").innerHTML = `vowels count = ${vowel}`;
    

}