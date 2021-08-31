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
                Steps = recipe.Steps?.Select( s => new CreateStepCommand
                {
                    Name = s.Name,
                    Description = s.Description
                } ).ToList(),
                Ingredients = recipe.Ingredients?.Select( i => new CreateIngredientCommand
                {
                    Name = i.Name,
                    Description = i.Description
                } ).ToList(),
                Tags = recipe.Tags?.Select( t => new CreateTagCommand
                {
                    Name = t.Name
                } ).ToList()
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
                Steps = recipe.Steps?.Select( s => new UpdateStepCommand
                {
                    Id = s.Id,
                    Name = s.Name,
                    Description = s.Description,
                    RecipeId = s.RecipeId
                } ).ToList(),
                Ingredients = recipe.Ingredients?.Select( i => new UpdateIngredientCommand
                {
                    Id = i.Id,
                    Name = i.Name,
                    Description = i.Description,
                    RecipeId = i.RecipeId
                } ).ToList(),
                Tags = recipe.Tags?.Select( t => new UpdateTagCommand
                {
                    Id = t.Id,
                    Name = t.Name,
                    RecipeId = t.RecipeId
                } ).ToList()
            };
        }
    }
}
