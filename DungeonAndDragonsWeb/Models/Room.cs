namespace DungeonAndDragonsWeb.Models
{
    public class Room
    {
        public string Title {  get; set; }
        public string Created { get; set; }
        public Person[] Persons { get; set; }
    }
}
