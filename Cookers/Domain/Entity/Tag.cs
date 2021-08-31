namespace Domain.Entity
{
    public class Tag
    {
        public int Id { get; private set; }
        public string Name { get; set; }
        public int RecipeId { get; set; }

        public Tag() { }

        public Tag
            ( 
            int id, 
            string name, 
            int recipeId 
            )
        {
            Id = id;
            Name = name;
            RecipeId = recipeId;
        }

        public void CopyFrom( Tag tag )
        {
            Name = tag.Name;
        }
    }
}
