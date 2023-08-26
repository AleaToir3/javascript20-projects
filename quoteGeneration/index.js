const txtQuote = document.getElementById("txtQuote")
const author = document.getElementById("author")
const btnOnlineQuotes = document.getElementById("btnOnlineQuotes")
const btnLocalQuotes = document.getElementById("btnLocalQuotes")
const twitter = document.getElementById("twitter")
const loader = document.getElementById("loader")
const containerQuote = document.getElementById("containerQuote")
  
// =================== Loader ===================
function loading(){
    loader.hidden = false;
    containerQuote.hidden = true
}
 //complete loading
 function completeloading(){
    loader.hidden = true;
    containerQuote.hidden = false
}
// =================== BTN CLICK ===================

btnLocalQuotes.addEventListener("click",(e)=>{
    displayQuotes(localQuotes)
})
btnOnlineQuotes.addEventListener("click",(e)=>{
    getQuotesOnline()
})
twitter.addEventListener("click",(e)=>{
// %0A = line break in URL
window.open(`https://twitter.com/intent/tweet?text=${txtQuote.textContent}%0A%0A${author.textContent}`,'_blank')
})
// =================== BTN CLICK ===================
 let quotes = []
 //............localy............
function displayQuotes(urlQuotes){   
    loading() 
    quotes= urlQuotes[Math.floor( Math.random() * urlQuotes.length ) ]
    if(quotes.text.length > 50) {
        txtQuote.classList.add("smalltxtQuote")
        txtQuote.classList.remove("txtQuote")
    }else{
        txtQuote.classList.add("txtQuote")
        txtQuote.classList.remove("smalltxtQuote")
    }
    txtQuote.textContent = quotes.text
    author.textContent = quotes.author
    completeloading()
 }

//............Online............
async function getQuotesOnline(){
    loading()
     try{
        const res = await fetch("https://jacintodesign.github.io/quotes-api/data/quotes.json")
        quotesOnline = await res.json()
        quotes= quotesOnline[Math.floor( Math.random() * quotesOnline.length ) ]
        txtQuote.textContent = quotes.text
        author.textContent = quotes.author
    }catch{
        
    }
    completeloading()
}

displayQuotes(localQuotes)



 