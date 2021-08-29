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

        public RecipeService( IRecipeRepository recipeRepository, IStepRepository stepRepository, IIngredientRepository ingredientRepository, ITagRepository tagRepository )
        {
            _recipeRepository = recipeRepository;
            _stepRepository = stepRepository;
            _ingredientRepository = ingredientRepository;
            _tagRepository = tagRepository;
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

        public bool Update( UpdateRecipeCommand recipeCommand )
        {
            try
            {
                _recipeRepository.Update( RecipeConverter.FromUpdateCommand( recipeCommand ), recipeCommand.Id );
                UpdateIngredientsEntities( recipeCommand.Ingredients );
                UpdateStepsEntities( recipeCommand.Steps );
                UpdateTagsEntities( recipeCommand.Tags );
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

        public void UpdateStepsEntities( List<UpdateStepCommand> updateSteps )
        {
            foreach ( UpdateStepCommand step in updateSteps )
            {
                _stepRepository.Update( RecipeConverter.ToStepEntity( step ), step.Id );
            }
        }

        public void UpdateIngredientsEntities( List<UpdateIngredientCommand> updateIngredients )
        {
            foreach ( UpdateIngredientCommand ingredient in updateIngredients )
            {
                _ingredientRepository.Update( RecipeConverter.ToIngredientEntity( ingredient ), ingredient.Id );
            }
        }

        public void UpdateTagsEntities( List<UpdateTagCommand> updateTags )
        {
            foreach ( UpdateTagCommand tag in updateTags )
            {
                _tagRepository.Update( RecipeConverter.ToTagEntity( tag ), tag.Id );
            }
        }
    }
}
