using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
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
            return _recipeDbContext.Set<Recipe>()
                .Include( r => r.Tags )
                .Include( r => r.Ingredients )
                .Include( r => r.Steps ).Take( count ).ToList();
        }

        public List<Recipe> SeachRecipes( string name )
        {
            return _recipeDbContext.Set<Recipe>().Where( r => EF.Functions.Like( r.Name, name ) ).ToList();
        }

        public List<Recipe> GetRecipeByTag( string tagName )
        {
            return _recipeDbContext.Set<Recipe>().Where( r => r.Tags.Any( t => t.Name == tagName) ).ToList();
        }

        public Recipe GetDayRecipe()
        {
            int maxLikes = _recipeDbContext.Set<Recipe>().Max( r => r.Likes );
            return _recipeDbContext.Set<Recipe>().FirstOrDefault( r => r.Likes == maxLikes );
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
