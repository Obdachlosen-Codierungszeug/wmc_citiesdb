let tbodyCities = document.getElementById('tbody-cities') as HTMLTableSectionElement;


fetch('/population/cities').then(async response => {
    let cities = await response.json();

    tbodyCities.innerHTML = '';

    cities.forEach(city => {
        let tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${city.continent}</td>
            <td>${city.country}</td>
            <td>${city.name}</td>
            <td>${city.population}</td>
        `;
        tbodyCities.appendChild(tr);
    });
});