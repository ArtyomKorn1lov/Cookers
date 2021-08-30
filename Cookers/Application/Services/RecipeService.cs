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

        public RecipeService( IRecipeRepository recipeRepository, 
            IStepRepository stepRepository, 
            IIngredientRepository ingredientRepository, 
            ITagRepository tagRepository )
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
                Recipe recipe = _recipeRepository.Get( recipeCommand.Id );
                recipe.CopyFrom( RecipeConverter.FromUpdateCommand( recipeCommand ) );
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
                Step _step = _stepRepository.Get( step.Id );
                if ( _step == null )
                    _stepRepository.Create( StepConverter.ToStepEntity( step ) );
                else
                    _step.CopyFrom( StepConverter.ToStepEntity( step ) );
            }
        }

        public void UpdateIngredientsEntities( List<UpdateIngredientCommand> updateIngredients )
        {
            foreach ( UpdateIngredientCommand ingredient in updateIngredients )
            {
                Ingredient _ingredient = _ingredientRepository.Get( ingredient.Id );
                if ( _ingredient == null )
                    _ingredientRepository.Create( IngredientConverter.ToIngredientEntity( ingredient ) );
                else
                    _ingredient.CopyFrom( IngredientConverter.ToIngredientEntity( ingredient ) );
            }
        }

        public void UpdateTagsEntities( List<UpdateTagCommand> updateTags )
        {
            foreach ( UpdateTagCommand tag in updateTags )
            {
                Tag _tag = _tagRepository.Get( tag.Id );
                if ( _tag == null )
                    _tagRepository.Create( TagConverter.ToTagEntity( tag ) );
                else
                    _tag.CopyFrom( TagConverter.ToTagEntity( tag ) );
            }
        }
    }
}
