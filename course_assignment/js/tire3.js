fetch('http://webapi19sa-1.course.tamk.cloud/v1/weather')
.then(function(response){
    return response.json();

})
.then(function(weaterdata){
    let placeholder=document.querySelector('#data-output');
    let out="";
    let limit="30";
    for(const[i, data] of weaterdata.entries()){
        if (i<30){
            // remove Z value
            const date = data.date_time.replaceAll('Z', ' ');
            // split date where there is T value
            var givendate = date.split("T");
            out += `
                <tr>
                    <td>${i+1}</td>
                    <td>${data.date_time}</td>
                    <td>${givendate[0]}</td>
                    <td>${givendate[1]}</td>
                    <td>${data.data.humidity_out}</td>
                </tr>
            `;
       
        }
    }
    placeholder.innerHTML = out;

})

