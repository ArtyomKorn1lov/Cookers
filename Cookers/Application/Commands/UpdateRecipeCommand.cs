using System.Collections.Generic;

namespace Application.Commands
{
    public class UpdateRecipeCommand
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Photo { get; set; }
        public int CookingTime { get; set; }
        public int PersonCount { get; set; }
        public int Favourites { get; set; }
        public int Likes { get; set; }
        public List<StepDto> Steps { get; set; }
        public List<IngredientDto> Ingredients { get; set; }
        public List<TagDto> Tags { get; set; }
    }
}
