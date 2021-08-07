using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Entity
{
    public class Recipe
    {
        private int Id { get; set; }
        private string Name { get; set; }
        private string Description { get; set; }
        private string Photo { get; set; }
        private int CookingTime { get; set; }
        private int Peoples { get; set; }
        private int Favorites { get; set; }
        private int Likes { get; set; }
        private int IngredientId { get; set; }
        private int StepId { get; set; }
    }
}
