async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/julio-cesarcs/desafio-portfolio-dio/main/data/profile.json'
    const fetchig = await fetch(url)
    return await fetchig.json()
}
