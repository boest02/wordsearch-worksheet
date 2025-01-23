
// load json object
async function getLists() {
    const response = await fetch('/data/Lists.json');
    const data = await response.json();

    console.log(data);
    let lists = data.lists;

    document.querySelector('#list-select').innerHTML = `<option value="">--Please choose an option--</option>${Object.keys(lists).map((key) => `<option value="${key}">${key}</option>`)
        }`;

    return lists;
}

export default getLists;