export function strangerThings(searhBar, quotes){

    const d = document;
    let $search = d.querySelector(searhBar);
    let $quotes = d.querySelector(quotes);

    $search.addEventListener("keyup", async (e) => {
        if(e.key === "Enter"){
            try{
                $quotes.innerHTML = `<span class="loader"></span>`
                console.log("Enter");
                console.log(e.target.value);
                
                let NumberOfQuotes = e.target.value === "" ? 1 : Number(e.target.value);

                let res = await fetch(`https://strangerthings-quotes.vercel.app/api/quotes/${NumberOfQuotes}`);
                if(!res.ok) throw "No se pudo acceder a la api the Stranger Things Quotes";

                const data = await res.json();
                let $template = "";

                data.forEach(({quote, author}) => {
                    $template += `
                        <h2>${quote}</h2>
                        <small>By: ${author}</small>
                    `;
                });

                $quotes.innerHTML = $template;
                
            }catch(e){
                $quotes.innerHTML = `<p><b>${e}</b></p>`
            }
        }
    })

    $search.addEventListener("search", (e) => {
        console.log(e);
        $quotes.innerHTML = "";
      });
}