namespace Domain.Entity
{
    public class Step
    {
        public int Id { get; private set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int RecipeId { get; set; }

        public Step() { }

        public Step( int id, string name, string description, int recipeId )
        {
            Id = id;
            Name = name;
            Description = description;
            RecipeId = recipeId;
        }

        public void CopyFrom( Step step )
        {
            Name = step.Name;
            Description = step.Description;
        }
    }
}
