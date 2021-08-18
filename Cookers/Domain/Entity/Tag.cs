namespace Domain.Entity
{
    public class Tag
    {
        public int Id { get; private set; }
        public string Name { get; set; }
        public int RecipeId { get; set; }
    }
}
