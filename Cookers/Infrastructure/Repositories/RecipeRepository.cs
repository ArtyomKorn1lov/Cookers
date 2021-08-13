using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Domain.Entity;
using Domain.Repositories;
using Infrastructure.DbContexts;

namespace Infrastructure.Repositories
{
    public class RecipeRepository : IRecipeRepository
    {
        private RecipeDbContext _recipeDbContext;

        public RecipeRepository( RecipeDbContext context )
        {
            _recipeDbContext = context;
        }

        public IEnumerable<Recipe> GetLastCount()
        {
            return _recipeDbContext.Recipes;
        }

        public Recipe Get( int id )
        {
            return _recipeDbContext.Recipes.Find( id );
        }

        public void Create( Recipe recipe )
        {
            _recipeDbContext.Recipes.Add( recipe );
        }

        public void Delete( int id )
        {
            Recipe recipe = _recipeDbContext.Recipes.Find( id );
            if ( recipe != null )
                _recipeDbContext.Recipes.Remove( recipe );
        }
    }
}
