using System.Collections.Generic;
using Domain.Entity;
using Domain.Repositories;
using Infrastructure.DbContexts;
using System.Linq;

namespace Infrastructure.Repositories
{
    public class IngredientRepository : IIngredientRepository
    {
        private RecipeDbContext _recipeDbContext;

        public List<Ingredient> GetByRecipeId( int id )
        {
            return _recipeDbContext.Set<Ingredient>().Where( i => i.RecipeId == id ).ToList();
        }
    }
}
