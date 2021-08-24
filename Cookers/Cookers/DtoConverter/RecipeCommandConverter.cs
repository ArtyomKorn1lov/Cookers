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
                return null;
            }
            return new CreateRecipeCommand
            {
                Name = recipe.Name,
                Description = recipe.Description,
                Photo = recipe.Photo,
                CookingTime = recipe.CookingTime,
                PersonCount = recipe.PersonCount,
                Steps = recipe.Steps?.Select( s => new Application.Commands.StepDto
                {
                    Name = s.Name,
                    Description = s.Description
                } ).ToList(),
                Ingredients = recipe.Ingredients?.Select( i => new Application.Commands.IngredientDto
                {
                    Name = i.Name,
                    Description = i.Description,
                } ).ToList(),
                Tags = recipe.Tags?.Select( t => new Application.Commands.TagDto
                {
                    Name = t.Name
                } ).ToList(),
            };
        }
        public static UpdateRecipeCommand ConvertUpdateRecipeCommand( UpdateRecipeCommandDto recipe )
        {
            if ( recipe == null )
            {
                return null;
            }
            return new UpdateRecipeCommand
            {
                Id = recipe.Id,
                Name = recipe.Name,
                Description = recipe.Description,
                Photo = recipe.Photo,
                CookingTime = recipe.CookingTime,
                PersonCount = recipe.PersonCount,
                Likes = recipe.Likes,
                Favourites = recipe.Favourites,
                Steps = recipe.Steps?.Select( s => new Application.Commands.StepDto
                {
                    Name = s.Name,
                    Description = s.Description
                } ).ToList(),
                Ingredients = recipe.Ingredients?.Select( i => new Application.Commands.IngredientDto
                {
                    Name = i.Name,
                    Description = i.Description,
                } ).ToList(),
                Tags = recipe.Tags?.Select( t => new Application.Commands.TagDto
                {
                    Name = t.Name
                } ).ToList(),
            };
        }
    }
}
