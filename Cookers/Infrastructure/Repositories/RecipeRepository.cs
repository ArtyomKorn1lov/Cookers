using System.Collections.Generic;
using Domain.Entity;
using Domain.Repositories;
using Infrastructure.DbContexts;
using System.Linq;

namespace Infrastructure.Repositories
{
    public class RecipeRepository : IRecipeRepository
    {
        private RecipeDbContext _recipeDbContext;

        public RecipeRepository( RecipeDbContext context )
        {
            _recipeDbContext = context;
        }

        public List<Recipe> GetLastCount( int count )
        {
            return _recipeDbContext.Set<Recipe>().ToList();
        }

        public Recipe Get( int id )
        {
            return _recipeDbContext.Set<Recipe>().FirstOrDefault( r => r.Id == id );
        }

        public void Create( Recipe recipe )
        {
            _recipeDbContext.Set<Recipe>().Add( recipe );
        }

        public void Delete( int id )
        {
            Recipe recipe = _recipeDbContext.Set<Recipe>().FirstOrDefault( r => r.Id == id );
            if ( recipe != null )
                _recipeDbContext.Set<Recipe>().Remove( recipe );
        }
    }
}
