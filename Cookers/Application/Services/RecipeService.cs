using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Domain.Entity;
using Domain.Repositories;

namespace Application.Services
{
    public class RecipeService : IRecipeService
    {
        private IRecipeRepository _recipeRepository;

        public RecipeService( IRecipeRepository recipeRepository )
        {
            _recipeRepository = recipeRepository;
        }

        public List<Recipe> GetLastCount( int count )
        {
            return _recipeRepository.GetLastCount( count );
        }

        public List<Recipe> SeachRecipes( string name )
        {
            name = "%" + name + "%";
            return _recipeRepository.SeachRecipes( name );
        }

        public List<Recipe> GetRecipeByTag( string tagName )
        {
            return _recipeRepository.GetRecipeByTag( tagName );
        }

        public Recipe GetDayRecipe()
        {
            return _recipeRepository.GetDayRecipe();
        }

        public Recipe Get( int id )
        {
            return _recipeRepository.Get( id );
        }

        public void Create( Recipe recipe )
        {
            _recipeRepository.Create( recipe );
        }

        public void Delete( int id )
        {
            _recipeRepository.Delete( id );
        }
    }
}
