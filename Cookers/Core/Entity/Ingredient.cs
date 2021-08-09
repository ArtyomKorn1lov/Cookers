using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entity
{
    public class Ingredient : Entity
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public int RecipeId { get; set; }
    }
}
