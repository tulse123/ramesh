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
            out += `
                <tr>
                    <td>${i+1}</td>
                    <td>${data.date_time}</td>
                    <td>${data.keys}</td>
                    <td>${data.data.humidity_out}</td>
                </tr>
            `;
       
        }
    }
    placeholder.innerHTML = out;

})