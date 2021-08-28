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

        public void Update( UpdateRecipeCommand recipeCommand )
        {
            Recipe recipe = _recipeRepository.Get( recipeCommand.Id );
            List<Step> steps = UpdateStepsEntities( _stepRepository.GetByRecipeId( recipeCommand.Id ), recipeCommand.Steps );
            List<Ingredient> ingredients = UpdateIngredientsEntities( _ingredientRepository.GetByRecipeId( recipeCommand.Id ), recipeCommand.Ingredients );
            List<Tag> tags = UpdateTagsEntities( _tagRepository.GetByRecipeId( recipeCommand.Id ), recipeCommand.Tags );
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

        public List<Step> UpdateStepsEntities( List<Step> steps, List<UpdateStepCommand> updateSteps )
        {
            bool flag;
            for ( int countStep = 0; countStep < steps.Count; countStep++ )
            {
                flag = false;
                for ( int countUpdateSteps = 0; countUpdateSteps < updateSteps.Count; countUpdateSteps++ )
                {
                    if ( steps[ countStep ].Id == updateSteps[ countUpdateSteps ].Id )
                    {
                        steps[ countStep ].CopyFrom( RecipeCommandToRecipeEntity.ConvertToStepEntity( updateSteps[ countUpdateSteps ] ) );
                        flag = true;
                    }
                }
                if ( !flag )
                {
                    steps.RemoveAt( countStep );
                }
            }
            for ( int countUpdateSteps = 0; countUpdateSteps < updateSteps.Count; countUpdateSteps++ )
            {
                if ( updateSteps[ countUpdateSteps ].Id == 0 )
                {
                    steps.Add( new Step() );
                    steps[ steps.Count - 1 ] = RecipeCommandToRecipeEntity.ConvertToStepEntity( updateSteps[ countUpdateSteps ] );
                }
            }
            return steps;
        }

        public List<Ingredient> UpdateIngredientsEntities( List<Ingredient> ingredients, List<UpdateIngredientCommand> updateIngredients )
        {
            bool flag;
            for ( int countIngredient = 0; countIngredient < ingredients.Count; countIngredient++ )
            {
                flag = false;
                for ( int countUpdateIngredients = 0; countUpdateIngredients < updateIngredients.Count; countUpdateIngredients++ )
                {
                    if ( ingredients[ countIngredient ].Id == updateIngredients[ countUpdateIngredients ].Id )
                    {
                        ingredients[ countIngredient ].CopyFrom( RecipeCommandToRecipeEntity.ConvertToIngredientEntity( updateIngredients[ countUpdateIngredients ] ) );
                        flag = true;
                    }
                }
                if ( !flag )
                {
                    ingredients.RemoveAt( countIngredient );
                }
            }
            for ( int countUpdateIngredients = 0; countUpdateIngredients < updateIngredients.Count; countUpdateIngredients++ )
            {
                if ( updateIngredients[ countUpdateIngredients ].Id == 0 )
                {
                    ingredients.Add( new Ingredient() );
                    ingredients[ ingredients.Count - 1 ] = RecipeCommandToRecipeEntity.ConvertToIngredientEntity( updateIngredients[ countUpdateIngredients ] );
                }
            }
            return ingredients;
        }

        public List<Tag> UpdateTagsEntities( List<Tag> tags, List<UpdateTagCommand> updateTags )
        {
            bool flag;
            for ( int countTag = 0; countTag < tags.Count; countTag++ )
            {
                flag = false;
                for ( int countUpdateTags = 0; countUpdateTags < updateTags.Count; countUpdateTags++ )
                {
                    if ( tags[ countTag ].Id == updateTags[ countUpdateTags ].Id )
                    {
                        tags[ countTag ].CopyFrom( RecipeCommandToRecipeEntity.ConvertToTagEntity( updateTags[ countUpdateTags ] ) );
                        flag = true;
                    }
                }
                if ( !flag )
                {
                    tags.RemoveAt( countTag );
                }
            }
            for ( int countUpdateTags = 0; countUpdateTags < updateTags.Count; countUpdateTags++ )
            {
                if ( updateTags[ countUpdateTags ].Id == 0 )
                {
                    tags.Add( new Tag() );
                    tags[ tags.Count - 1 ] = RecipeCommandToRecipeEntity.ConvertToTagEntity( updateTags[ countUpdateTags ] );
                }
            }
            return tags;
        }
    }
}
