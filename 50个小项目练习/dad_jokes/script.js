var but=document.querySelector(".next button");
var text=document.querySelector(".jokes_text")
but.addEventListener('click', generateJoke)


async function generateJoke() {
    const config = {
      headers: {
        Accept: 'application/json',
      },
    }

const res = await fetch('https://icanhazdadjoke.com', config)

const data = await res.json()

  text.innerHTML = data.joke
}


