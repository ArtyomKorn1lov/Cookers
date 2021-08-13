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
            return _recipeDbContext.Set<Recipe>();
        }

        public Recipe Get( int id )
        {
            return _recipeDbContext.Set<Recipe>().Find( id );
        }

        public void Create( Recipe recipe )
        {
            _recipeDbContext.Set<Recipe>().Add( recipe );
        }

        public void Delete( int id )
        {
            Recipe recipe = _recipeDbContext.Set<Recipe>().Find( id );
            if ( recipe != null )
                _recipeDbContext.Set<Recipe>().Remove( recipe );
        }
    }
}
