using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Domain.Entity;

namespace Domain.Repositories
{
    public interface IIngredientRepository
    {
        List<Ingredient> GetByRecipeId( int id );
    }
}
