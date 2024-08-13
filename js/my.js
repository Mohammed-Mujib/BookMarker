const siteName = document.querySelector("#siteName");
const siteUrl = document.querySelector("#siteUrl");

if(localStorage.getItem("savedBookMarkes") === null ){
    var savedBookMark = [];
}else{
    var savedBookMark = JSON.parse(localStorage.getItem("savedBookMarkes"));
    display_data()
}

function add() {
    let bookmarker= {
        name:siteName.value,
        url:siteUrl.value
    }
    savedBookMark.push(bookmarker);
    localStorage.setItem("savedBookMarkes",JSON.stringify(savedBookMark))
    clear();
    display_data()
}

function clear() {
    siteName.value = "";
    siteUrl.value = "";
}

function display_data() {
    let cartoona = "";
    for (let i = 0; i < savedBookMark.length; i++) {
        cartoona += `
        <div class="">
            <tr>
                <td>${savedBookMark[i].name}</td>
                <td><button class="btn btn-outline-primary" onclick="visit(${i})">Vist</button></td>
                <td><button class="btn  btn-outline-danger" onclick="delete_bookMark(${i})">Delete</button></td>
            </tr>
        </div>`;
    }
    document.querySelector("#tableData").innerHTML = cartoona;
}

function delete_bookMark(k){
    savedBookMark.splice(k,1);
    localStorage.setItem("savedBookMarkes",JSON.stringify(savedBookMark));
    display_data();
}

function visit(a){
    open(savedBookMark[a].url)
}