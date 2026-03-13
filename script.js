document.getElementById("btnBuscar").addEventListener("click", function() {
    fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(res => res.json())
    .then(usuario => {

        const jsonApiFormart = {
            data: {
                type: "users",
                id: usuario.id,
                attributes: {
                    nomeDoUsuario: usuario.name,
                    emailDoUsuario: usuario.email,
                    username: usuario.username
                }
            }
        };
        document.getElementById("saida").textContent = 
        JSON.stringify(jsonApiFormart, null, 4);
    });

});

