console.log("I am awesome");

let input = document.querySelector('#searchBox');
let button = document.querySelector('#button');
let sampleWord = document.querySelector('#sampleWord');
let definitionTitle = document.querySelector('#definitionTitle');
let definitionText = document.querySelector('#definitionText');
let headerSample = document.querySelector('#headerSample');
let sampleText = document.querySelector('#sampleText');


// const url = 'https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${word}';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '225500dc6bmsh74992ba17367ce5p107abfjsnff36f943c34d',
        'x-rapidapi-host': 'mashape-community-urban-dictionary.p.rapidapi.com'
    }
};

// Wrapping the fetch request inside an async function
// async function fetchData() {
//     try {
//         const response = await fetch(url, options);
//         const result = await response.text();
//         console.log(result);
//     } catch (error) {
//         console.error(error);
//     }
// }

// Call the fetchData function
// fetchData();

button.addEventListener('click', ()=> {
    let word= input.value;
    fetch(`https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${word}`, options)
    .then(response => response.json())
    .then(response => {
        // console.log(response)
        let term = response.list[0]

        sampleWord.innerHTML = word;

        definitionTitle.innerHTML = 'Meaning';
        definitionText.innerHTML = term.definition;

        headerSample.innerHTML = 'Example';
        sampleText.innerHTML = term.example;
    })
    .catch(err => console.err(err));
}
)
