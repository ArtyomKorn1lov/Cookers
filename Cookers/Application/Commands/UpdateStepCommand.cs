namespace Application.Commands
{
    public class UpdateStepCommand
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int RecipeId { get; set; }
    }
}
