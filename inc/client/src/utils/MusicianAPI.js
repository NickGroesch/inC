export default {
    create: function (data) {
        return fetch("/api/musician/create", {
            method: "POST",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        }).then(response => {
            console.log('createMusician', response)

            return response.json()
            //return response.ok ? response.json() : ""
        }
        );
    },
}