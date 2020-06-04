let checkSpam = (message,spam) => {

    spammers.forEach (item => {
        if (message.includes(item)) {
            alert(`${spam}. alert!!! this is spam`);
            return true;
            

        }
    }
    );
    alert("spam check done");
};


let browseText = prompt("search");

let spammers = ["icici","hdfc","act"]

checkSpam(browseText,browseText);

alert(browseText.charAt(0).toLocaleUpperCase().concat(browseText.slice(1,browseText.length)));

let text = prompt("text:")

let truncText = (t, length) => {
           
    if (t.length >= length ) {
        return t.replace(t.substr(length,t.length),"...");
    } else {
        return t;
    }
         
    
     
};

alert(truncText(text,10));
