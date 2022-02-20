document.querySelector(".encurtar").addEventListener("click",  () => {
    let url = document.getElementById("url").value;
    if (url == false) {
        alert("Url invalida");
        return;
    }

    const headers = {
        "Content-Type": "application/json",
        "apiKey": "671a5f65c4044e9795c651e6e419f2b5"
    }
    const linkRequest = {
        destination: url,
        domain: { fullName: "rebrand.ly" }
    }

    fetch("https://api.rebrandly.com/v1/links", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(linkRequest)
    })
        .then(response => response.json())
        .then(json => {
            let inputUrl = document.getElementById("url");
            inputUrl.value = json.shortUrl;
        });
})




document.querySelector(".copiar").addEventListener("click", () => {
    let link = document.getElementById("url")
    navigator.clipboard.writeText(link.value)

})
