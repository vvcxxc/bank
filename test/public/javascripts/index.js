$(() => {
   

    let getUserList = () => {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: "POST",
                url: "./findUser",
                data: {
                    id:"1"
                },
                success(data) {
                    console.log(data);
                    resolve(data)
                }
            })
        })
    }
   

    (async () => {
        let data = await getUserList();
        console.log(data);
        let html = data.map((item, index) => {
            return `
                <tr>
                <td>${item.id}</td>
                <td>${item.news}</td>
                </tr>            
            `
        }).join("");
        $("#list").html(html);
    })()

})