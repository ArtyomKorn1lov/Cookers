using System.Linq;
using Domain.Entity;
using Web.Dto;

namespace Web.DtoConverter
{
    public static class RecipeDtoConverter
    {
        public static RecipeDto ConvertToRecipeDto( Recipe recipe )
        {
            if ( recipe == null )
            {
                return null;
            }
            return new RecipeDto
            {
                Id = recipe.Id,
                Name = recipe.Name,
                Description = recipe.Description,
                Photo = recipe.Photo,
                CookingTime = recipe.CookingTime,
                PersonCount = recipe.PersonCount,
                Favourites = recipe.Favourites,
                Likes = recipe.Likes,
                Steps = recipe.Steps?.Select( s => new StepDto
                {
                    Id = s.Id,
                    Name = s.Name,
                    Description = s.Description,
                    RecipeId = s.RecipeId
                } ).ToList(),
                Ingredients = recipe.Ingredients?.Select( i => new IngredientDto
                {
                    Id = i.Id,
                    Name = i.Name,
                    Description = i.Description,
                    RecipeId = i.RecipeId
                } ).ToList(),
                Tags = recipe.Tags?.Select( t => new TagDto
                {
                    Id = t.Id,
                    Name = t.Name,
                    RecipeId = t.RecipeId
                } ).ToList()
            };
        }
    }
}
