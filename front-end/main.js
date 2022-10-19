(function () {
    const server = 'http://localhost:3000'
    const socket = io(server);

    socket.on('notification', (data) => {
        console.log('Message depuis le seveur:', data);
    })

    fetch(`${server}/test`).then((res) => {
        return res.json()
    }).then((data) => {
        console.log(data);
    })
})()