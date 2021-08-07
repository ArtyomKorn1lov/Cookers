using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Entity
{
    public class Step
    {
        private int Id { get; set; }
        private string Name { get; set; }
        private string Description { get; set; }
        private int RecipeId { get; set; }
    }
}
