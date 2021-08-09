using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Entity
{
    public class Recipe : Entity
    {
        public string Name { get; private set; }
        public string Description { get; private set; }
        public string Photo { get; private set; }
        public int CookingTime { get; private set; }
        public int Peoples { get; private set; }
        public int Favorites { get; private set; }
        public int Likes { get; private set; }
        public int IngredientId { get; private set; }
        public int StepId { get; private set; }
    }
}
