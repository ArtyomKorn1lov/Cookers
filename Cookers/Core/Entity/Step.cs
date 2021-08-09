using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entity
{
    public class Step : Entity
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public int RecipeId { get; set; }
    }
}
