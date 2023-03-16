
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function ConvertDigitToMonthNumber(digit){
    return months[digit - 1];
}


function ShowTable() {
    let userMonth = document.getElementById("month").value
    let myh1 = document.getElementById("mytitle");
    let monthName = ConvertDigitToMonthNumber(userMonth);
    let userYear = document.getElementById("year").value
    myh1.innerHTML = monthName + " " + userYear;

    if (userMonth >= 1 && userMonth <= 12) {
        let table = document.getElementById("table");
        table.innerHTML = `
        <tr>
                <th>SAT</th>
                <th>SUN</th>
                <th>MON</th>
                <th>TUE</th>
                <th>WED</th>
                <th>THU</th>
                <th>FRI</th>

            </tr>`
        let date = new Date(userYear, userMonth, 0)
        let date2 = new Date(userYear, userMonth, 1)

        let firstWeekDayOfMonth = date2.getUTCDay()
        let content = ""
        content += "<tr>"
        if (firstWeekDayOfMonth != 0) {
            firstWeekDayOfMonth -= 1;
        }
        for (let i = 0; i < firstWeekDayOfMonth; i++) {
            content += "<td> </td>"

        }
        let counter = -1;
        for (let i = firstWeekDayOfMonth; i < date.getDate() + firstWeekDayOfMonth; i++) {
            counter++;
            if (i % 7 == 0 && i != 0) {
                content += "</tr>";
                content += "<tr>";
            }
            let counterToString = counter.toString();
            content += `<td>${counter + 1}</td>`
        }
        table.innerHTML += content;

    }
    else {

        alert("Invalid Type")
        myh1.innerHTML = "";

    }
}
