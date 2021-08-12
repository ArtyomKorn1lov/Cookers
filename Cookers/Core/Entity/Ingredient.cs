namespace Domain.Entity
{
    public class Ingredient
    {
        public int Id { get; private set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int RecipeId { get; set; }
    }
}