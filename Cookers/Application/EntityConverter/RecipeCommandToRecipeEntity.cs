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
                return new Recipe
                {
                    Name = "",
                    Description = "",
                    Photo = "",
                    CookingTime = 0,
                    PersonCount = 0,
                    Favourites = 0,
                    Likes = 0,
                    Steps = null,
                    Ingredients = null,
                    Tags = null,
                };
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
        public static Recipe ConvertFromUpdateCommand( UpdateRecipeCommand recipe )
        {
            if ( recipe == null )
            {
                return new Recipe
                {
                    Name = "",
                    Description = "",
                    Photo = "",
                    CookingTime = 0,
                    PersonCount = 0,
                    Likes = 0,
                    Favourites = 0,
                    Steps = null,
                    Ingredients = null,
                    Tags = null,
                };
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
    }
}
