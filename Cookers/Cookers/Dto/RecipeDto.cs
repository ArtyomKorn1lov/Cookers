using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Cookers.Dto
{
    public class RecipeDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Photo { get; set; }
        public int CookingTime { get; set; }
        public int Peoples { get; set; }
        public int Favorites { get; set; }
        public int Likes { get; set; }
        public Step[] Steps { get; set; }
        public Ingredient[] Ingredients { get; set; }
    }

    public class Step
    {
        public string Name { get; set; }
        public string[] Description { get; set; }
    }

    public class Ingredient
    {
        public string Name { get; set; }
        public string Description { get; set; }
    }
}
