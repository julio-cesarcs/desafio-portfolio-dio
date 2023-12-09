async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/julio-cesarcs/desafio-portfolio-dio/main/assets/data/profile.json'
    const fetchig = await fetch(url)
    return await fetchig.json()
}
