const fetchCat = async () => {
    const response = await fetch("https://api.thecatapi.com/v1/images/search");
    if (response.ok){
        const body = await response.json();
        return body[0];
    }
}

try {
    const cat = await fetchCat();
    document.getElementById("cat").src = cat.url;   
} catch (error) {
    console.error(error);
}
