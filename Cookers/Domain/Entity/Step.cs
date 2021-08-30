namespace Domain.Entity
{
    public class Step
    {
        public int Id { get; private set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int RecipeId { get; set; }

        public void CopyFrom( Step step )
        {
            Name = step.Name;
            Description = step.Description;
        }
    }
}
