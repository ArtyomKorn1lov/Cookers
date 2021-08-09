using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Entity
{
    public class Recipe : Entity
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public string Photo { get; set; }
        public int CookingTime { get; set; }
        public int Peoples { get; set; }
        public int Favorites { get; set; }
        public int Likes { get; set; }
        public int IngredientId { get; set; }
        public int StepId { get; set; }
    }
}
