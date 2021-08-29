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

        public IngredientRepository( RecipeDbContext context )
        {
            _recipeDbContext = context;
        }

        public List<Ingredient> GetByRecipeId( int id )
        {
            return _recipeDbContext.Set<Ingredient>().Where( i => i.RecipeId == id ).ToList();
        }

        public Ingredient Get( int id )
        {
            return _recipeDbContext.Set<Ingredient>().FirstOrDefault( i => i.Id == id );
        }

        public void Update( Ingredient ingredient, int id )
        {
            Ingredient _ingredient = Get( id );
            _ingredient.CopyFrom( ingredient );
        }
    }
}
