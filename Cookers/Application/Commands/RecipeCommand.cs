using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Commands
{
    public class RecipeCommand
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Photo { get; set; }
        public int CookingTime { get; set; }
        public int PersonCount { get; set; }
        public int Favourites { get; set; }
        public int Likes { get; set; }
        public List<StepCommand> Steps { get; set; }
        public List<IngredientCommand> Ingredients { get; set; }
        public List<TagCommand> Tags { get; set; }
    }
}
