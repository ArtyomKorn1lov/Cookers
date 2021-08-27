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
        private IStepRepository _stepRepository;
        private IIngredientRepository _ingredientRepository;
        private ITagRepository _tagRepository;

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

        public void Update( UpdateRecipeCommand recipeCommand )
        {
            Recipe recipe = _recipeRepository.Get( recipeCommand.Id );
            List<Step> steps = _stepRepository.GetByRecipeId( recipeCommand.Id );
            List<Ingredient> ingredients = _ingredientRepository.GetByRecipeId( recipeCommand.Id );
            List<Tag> tags = _tagRepository.GetByRecipeId( recipeCommand.Id );
            Recipe _recipe = RecipeCommandToRecipeEntity.ConvertFromUpdateCommand( recipeCommand, steps, ingredients, tags );
            if ( _recipe != null && recipe != null )
                recipe.CopyFrom( _recipe );
        }

        public void Create( CreateRecipeCommand _recipe )
        {
            Recipe recipe = RecipeCommandToRecipeEntity.ConvertFromCreateCommand( _recipe );
            if ( recipe != null )
                _recipeRepository.Create( recipe );
        }

        public void Delete( int id )
        {
            _recipeRepository.Delete( id );
        }
    }
}
