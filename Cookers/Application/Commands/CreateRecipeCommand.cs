using System.Collections.Generic;

namespace Application.Commands
{
    public class CreateRecipeCommand
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public string Photo { get; set; }
        public int CookingTime { get; set; }
        public int PersonCount { get; set; }
        public List<StepDto> Steps { get; set; }
        public List<IngredientDto> Ingredients { get; set; }
        public List<TagDto> Tags { get; set; }
    }
}
