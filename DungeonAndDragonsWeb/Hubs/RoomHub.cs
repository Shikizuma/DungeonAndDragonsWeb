using DungeonAndDragonsWeb.Models;
using Microsoft.AspNetCore.SignalR;

namespace DungeonAndDragonsWeb.Hubs
{
    public class RoomHub : Hub
    {
        public async Task Enter(string user)
        {

            await Clients.Caller.SendAsync("LoadRooms", DataBaseMoq.Rooms);
        }
        public async Task NewRoom(string title)
        {
            var room = new Room()
            {
                Created = DateTime.Now.ToString("dddd HH:mm"),
                Persons = new Person[4],
                Title = title,
            };
            DataBaseMoq.Rooms.Add(room);

            await Clients.All.SendAsync("NewRoom", room);
        }
    }
}
