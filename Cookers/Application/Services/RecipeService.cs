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
            return _recipeRepository.GetByTag( tag );
        }

        public Recipe GetRecipeOfDay()
        {
            return _recipeRepository.GetRecipeOfDay();
        }

        public Recipe Get( int id )
        {
            return _recipeRepository.Get( id );
        }

        public bool Update( UpdateRecipeCommand recipeCommand )
        {
            try
            {
                Recipe _recipe = _recipeRepository.Get( recipeCommand.Id );
                _recipe.CopyFrom( RecipeConverter.FromUpdateCommand( recipeCommand ) );
                return true;
            }
            catch
            {
                return false;
            }
        }

        public bool Create( CreateRecipeCommand _recipe )
        {
            try
            {
                Recipe recipe = RecipeConverter.FromCreateCommand( _recipe );
                if ( recipe != null )
                    _recipeRepository.Create( recipe );
                return true;
            }
            catch
            {
                return false;
            }
        }

        public bool Delete( int id )
        {
            try
            {
                _recipeRepository.Delete( id );
                return true;
            }
            catch
            {
                return false;
            }
        }
    }
}
