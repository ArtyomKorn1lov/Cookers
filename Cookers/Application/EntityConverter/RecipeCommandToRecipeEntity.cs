using System.Collections.Generic;
using System.Linq;
using Application.Commands;
using Domain.Entity;

namespace Application.EntityConverter
{
    public class RecipeCommandToRecipeEntity
    {
        public static Recipe ConvertFromCreateCommand( CreateRecipeCommand recipe )
        {
            if ( recipe == null )
            {
                return null;
            }
            return new Recipe
            {
                Name = recipe.Name,
                Description = recipe.Description,
                Photo = recipe.Photo,
                CookingTime = recipe.CookingTime,
                PersonCount = recipe.PersonCount,
                Favourites = 0,
                Likes = 0,
                Steps = recipe.Steps?.Select( s => new Step
                {
                    Name = s.Name,
                    Description = s.Description
                } ).ToList(),
                Ingredients = recipe.Ingredients?.Select( i => new Ingredient
                {
                    Name = i.Name,
                    Description = i.Description,
                } ).ToList(),
                Tags = recipe.Tags?.Select( t => new Tag
                {
                    Name = t.Name
                } ).ToList(),
            };
        }
        public static Recipe ConvertFromUpdateCommand( UpdateRecipeCommand recipe, List<Step> steps, List<Ingredient> ingredients, List<Tag> tags )
        {
            if ( recipe == null )
            {
                return null;
            }
            return new Recipe
            {
                Name = recipe.Name,
                Description = recipe.Description,
                Photo = recipe.Photo,
                CookingTime = recipe.CookingTime,
                PersonCount = recipe.PersonCount,
                Likes = recipe.Likes,
                Favourites = recipe.Favourites,
                Steps = steps,
                Ingredients = ingredients,
                Tags = tags,
            };
        }
        public static Step ConvertToStepEntity( UpdateStepCommand step )
        {
            if ( step == null )
            {
                return null;
            }
            return new Step
            {
                Name = step.Name,
                Description = step.Description,
            };
        }
        public static Ingredient ConvertToIngredientEntity( UpdateIngredientCommand ingredient )
        {
            if ( ingredient == null )
            {
                return null;
            }
            return new Ingredient
            {
                Name = ingredient.Name,
                Description = ingredient.Description,
            };
        }
        public static Tag ConvertToTagEntity( UpdateTagCommand tag )
        {
            if ( tag == null )
            {
                return null;
            }
            return new Tag
            {
                Name = tag.Name,
            };
        }
    }
}
