using System.Collections.Generic;
using Application.Commands;
using Application.EntityConverter;
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

        public List<Recipe> GetByName( string name )
        {
            return _recipeRepository.GetByName( $"%{name}%" );
        }

        public List<Recipe> GetRecipeByTag( string tag )
        {
            return _recipeRepository.GetRecipeByTag( tag );
        }

        public Recipe GetRecipeOfDay()
        {
            return _recipeRepository.GetRecipeOfDay();
        }

        public Recipe Get( int id )
        {
            return _recipeRepository.Get( id );
        }

        public void Update( UpdateRecipeCommand recipeCommand, Recipe recipe )
        {

            Recipe _recipe = RecipeCommandToRecipeEntity.ConvertFromUpdateCommand( recipeCommand );
            recipe.CopyFrom( recipe );
        }

        public void Create( CreateRecipeCommand _recipe )
        {
            Recipe recipe = RecipeCommandToRecipeEntity.ConvertFromCreateCommand( _recipe );
            _recipeRepository.Create( recipe );
        }

        public void Delete( int id )
        {
            _recipeRepository.Delete( id );
        }
    }
}
