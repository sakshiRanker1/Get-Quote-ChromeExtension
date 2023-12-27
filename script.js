// // async function getQuote() {
// //     return await fetch("https://andruxnet-random-famous-quotes.p.rapidapi.com/")
// //     .then(data=>data.json())

// // }
// // getQuote();

// // const url = 'https://andruxnet-random-famous-quotes.p.rapidapi.com/?cat=movies&count=10';
// // const options = {
// // 	method: 'POST',
// // 	headers: {
// // 		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
// // 		'X-RapidAPI-Host': 'andruxnet-random-famous-quotes.p.rapidapi.com'
// // 	}
// // };
// // async function getQuote(){

// //     try {
// //         const response = await fetch(url, options);
// //         const result = await response.text();
// //         console.log(result);
// //     } catch (error) {
// //         console.error(error);
// //     }
// // }
// // getQuote();
// const url = 'https://healthruwords.p.rapidapi.com/v1/quotes/?t=Wisdom&maxR=1&size=medium&id=731';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
// 		'X-RapidAPI-Host': 'healthruwords.p.rapidapi.com'
// 	}
// };
// async function getQuote(){

//     try {
//         const response = await fetch(url, options);
//         const result = await response.text();
//         console.log(result);
//     } catch (error) {
//         console.error(error);
//     }
// }
// getQuote();
let quote = document.getElementById("quote"),
  author = document.getElementById("author"),
  bnt = document.getElementById("btn");
const url = "https://api.quotable.io/random";
let getQuote=()=> {
   fetch(url)
    .then((data) => data.json())
    .then((item) => {
      console.log(item.content);
      console.log(item.author);
      quote.innerText = item.content;
      author.innerText = item.author;
    });
}

window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);
