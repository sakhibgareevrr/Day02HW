let word: string = '';
let worddspl='';
let i:number = 1;
$(document).ready(function() {

    let guess: number = Math.floor(Math.random()*9.999);

    switch (guess) {
    case 0:
        word = 'grandmother';
        break;
    case 1:
        word = 'conditioner';
        break;
    case 2:
        word = 'neighbour';
        break;
    case 3:
        word = 'university';
        break;
    case 4:
        word = 'furniture';
        break;
    case 5:
        word = 'basketball';
        break;
    case 6:
        word = 'refridgerator';
        break;
    case 7:
        word = 'mathematics';
        break;
    case 8:
        word = 'astronomy';
        break;
    case 9:
        word = 'sausage';
        break;
    }
    for (let ii=0;ii<word.length;ii++) {worddspl +='_'};
    $('#display1').html('<h4> '+worddspl+' </h4>');
    console.log(word);
});

function startGame() {
    let completeWord: boolean = false;
    let lttr: string = $('#userLetter').val();
    var m:number = word.indexOf(lttr);
    if (i<6) {
        if (lttr==word) {
            completeWord=true;
            worddspl=word;
            $('#display2').html('<label style="color:red">Congratulations! You won! </label>');
        } else if (m<0 || lttr.length==0) {
            $('#image').html('<img src="0'+i.toString()+'.PNG">');
            i++;
            $('#userLabel').html('<label> Make word or letter guess #'+i.toString()+' (6 max)</label>');
        } else {
            for (let j=0;j<word.length;j++)  {
                if (lttr==word.substr(j,1)) {
                    worddspl=setCharAt(worddspl,j,lttr);
                }
            }
        }
    } else {
        $('#display2').html('<h2 style="color:red">Game Over! You lost! </h2>');
        $('#image').html('<img src="0'+i.toString()+'.PNG">');
    }
    if (worddspl.indexOf('_')==-1) {
        completeWord=true;
        $('#display2').html('<h2 style="color:red">Congratulations! You won! </h2>');
    }
    $('#display1').html('<h3> '+worddspl+' </h3>');
    clearInput();
}

function setCharAt(string1:string,i:number,char:string) {
	if(i > string1.length-1) return string1;
	return string1.substr(0,i) + char + string1.substr(i+1);
}

function clearInput() {
    $('#userLetter').val('');
}
