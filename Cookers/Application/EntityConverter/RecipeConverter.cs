using System.Linq;
using Application.Commands;
using Domain.Entity;

namespace Application.EntityConverter
{
    public class RecipeConverter
    {
        public static Recipe FromCreateCommand( CreateRecipeCommand recipe )
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
                    Description = i.Description
                } ).ToList(),
                Tags = recipe.Tags?.Select( t => new Tag
                {
                    Name = t.Name
                } ).ToList()
            };
        }

        public static Recipe FromUpdateCommand( UpdateRecipeCommand recipe )
        {
            if ( recipe == null )
            {
                return null;
            }
            return new Recipe( recipe.Id,
                recipe.Name,
                recipe.Description,
                recipe.CookingTime,
                recipe.PersonCount,
                recipe.Favourites,
                recipe.Photo,
                recipe.Likes,
                recipe.Steps?.Select( s => new Step
                (
                    s.Id,
                    s.Name,
                    s.Description,
                    s.RecipeId
                    ) ).ToList(),
                recipe.Tags?.Select( t => new Tag
                (
                    t.Id,
                    t.Name,
                    t.RecipeId
                   ) ).ToList(),
                recipe.Ingredients?.Select( i => new Ingredient
                (
                    i.Id,
                    i.Name,
                    i.Description,
                    i.RecipeId
                    )).ToList()
                );
        }
    }
}
