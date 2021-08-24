using System.Linq;
using Application.Commands;
using Web.Dto;

namespace Web.DtoConverter
{
    public class RecipeCommandConverter
    {
        public static CreateRecipeCommand ConvertCreateRecipeCommand( CreateRecipeCommandDto recipe )
        {
            if ( recipe == null )
            {
                return new CreateRecipeCommand
                {
                    Name = "",
                    Description = "",
                    Photo = "",
                    CookingTime = 0,
                    PersonCount = 0,
                    Steps = null,
                    Ingredients = null,
                    Tags = null,
                };
            }
            return new CreateRecipeCommand
            {
                Name = recipe.Name,
                Description = recipe.Description,
                Photo = recipe.Photo,
                CookingTime = recipe.CookingTime,
                PersonCount = recipe.PersonCount,
                Steps = recipe.Steps?.Select( s => new StepCommand
                {
                    Name = s.Name,
                    Description = s.Description
                } ).ToList(),
                Ingredients = recipe.Ingredients?.Select( i => new IngredientCommand
                {
                    Name = i.Name,
                    Description = i.Description,
                } ).ToList(),
                Tags = recipe.Tags?.Select( t => new TagCommand
                {
                    Name = t.Name
                } ).ToList(),
            };
        }
        public static UpdateRecipeCommand ConvertUpdateRecipeCommand( UpdateRecipeCommandDto recipe )
        {
            if ( recipe == null )
            {
                return new UpdateRecipeCommand
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
            return new UpdateRecipeCommand
            {
                Name = recipe.Name,
                Description = recipe.Description,
                Photo = recipe.Photo,
                CookingTime = recipe.CookingTime,
                PersonCount = recipe.PersonCount,
                Likes = recipe.Likes,
                Favourites = recipe.Favourites,
                Steps = recipe.Steps?.Select( s => new StepCommand
                {
                    Name = s.Name,
                    Description = s.Description
                } ).ToList(),
                Ingredients = recipe.Ingredients?.Select( i => new IngredientCommand
                {
                    Name = i.Name,
                    Description = i.Description,
                } ).ToList(),
                Tags = recipe.Tags?.Select( t => new TagCommand
                {
                    Name = t.Name
                } ).ToList(),
            };
        }
    }
}
