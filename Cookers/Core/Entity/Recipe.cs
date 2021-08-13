using System.Collections.Generic;

namespace Domain.Entity
{
    public class Recipe
    {
        public int Id { get; private set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int CookingTime { get; set; }
        public int PersonCount { get; set; }
        public int Favourites { get; set; }
        public int Likes { get; set; }
        public List<Step> Steps { get; set; }
        public List<Recipe> Recipes { get; set; }
        public List<Ingredient> Ingredients { get; set; }
    }
}
