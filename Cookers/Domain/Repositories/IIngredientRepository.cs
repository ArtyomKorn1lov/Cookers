using System.Collections.Generic;
using Domain.Entity;

namespace Domain.Repositories
{
    public interface IIngredientRepository
    {
        List<Ingredient> GetByRecipeId( int id );
        Ingredient Get( int id );
        void Update( Ingredient item, int id );
    }
}
