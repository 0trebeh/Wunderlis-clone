export function datetime() {
    const now = new Date();
    let date = now.getFullYear() + '-' + ( now.getMonth() + 1 ) + '-' + now.getDate();
    let time = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();

    return (date +" "+ time);
}

export function compare(dateSystem, myDate) {

    let date= new Date(dateSystem);
    let mydate= new Date(myDate);

    if(date >= mydate){
        return ('true');
    }
    return ('false');
}

/*  Ordenar por fecha de mayor a menor

var array = [
        {
           datetime:"2018-10-25",
        },
        {
           datetime:"2019-10-26",
        },
    ];

    let sorted = array.map(function (res) { return res.datetime; }).sort().reverse();
    console.log(sorted);

*/