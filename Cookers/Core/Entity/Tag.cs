using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Entity
{
    public class Tag : Entity
    {
        public int Id { get; private set; }
        private string Name { get; set; }
        private int RecipeId { get; set; }
    }
}
