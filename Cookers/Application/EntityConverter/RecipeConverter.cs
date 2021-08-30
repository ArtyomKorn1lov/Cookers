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
            return new Recipe 
            {
                Name = recipe.Name,
                Description = recipe.Description,
                Photo = recipe.Photo,
                CookingTime = recipe.CookingTime,
                PersonCount = recipe.PersonCount,
                Favourites = recipe.Favourites,
                Likes = recipe.Likes
            };
        }
    }
}
