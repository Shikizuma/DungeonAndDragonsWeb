using DungeonAndDragonsWeb.Models;

namespace DungeonAndDragonsWeb
{
    public static class DataBaseMoq
    {
        public static List<Room> Rooms { get; set; }

        static DataBaseMoq()
        {
            Rooms = new List<Room>();
        }
    }
}
