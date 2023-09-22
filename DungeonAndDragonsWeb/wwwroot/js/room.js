const connection = new signalR.HubConnectionBuilder().withUrl("/room").build();

connection.on("LoadRooms", (info) => {
    app.LoadRooms(info);
});

connection.on("NewRoom", (room) => {
    app.AppendRoom(room);
});


async function startRoom() {
    await connection.start();
    connection.invoke("Enter", "rooom")
}

startRoom();

var app = new Vue({
    el: "#app",
    data: {
        rooms: [],
        roomName: "",
    },
    methods: {
        CreateRoom() {
            connection.invoke("NewRoom", this.roomName)
        },
        AppendRoom(room) {
            this.rooms.push(room);
        },
        LoadRooms(rooms) {
            this.rooms = rooms;
        }
    }
})