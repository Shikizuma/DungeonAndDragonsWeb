using Microsoft.AspNetCore.SignalR;

namespace DungeonAndDragonsWeb.Hubs
{
    public class BattleHub : Hub
    {
        public async Task Move(string text)
        {
            //await Clients.All.SendAsync("Move", text);
        }
    }
}
