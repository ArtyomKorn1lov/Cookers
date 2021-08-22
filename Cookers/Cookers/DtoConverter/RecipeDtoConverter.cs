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
                return new RecipeDto
                {
                    Id = 0,
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
                    Name = s.Name,
                    Description = s.Description
                } ).ToList(),
                Ingredients = recipe.Ingredients?.Select( i => new IngredientDto
                {
                    Name = i.Name,
                    Description = i.Description,
                } ).ToList(),
                Tags = recipe.Tags?.Select( t => new TagDto
                {
                    Name = t.Name
                } ).ToList(),
            };
        }
        public static Recipe ConvertToRecipeEntity( RecipeDto recipe )
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
                Favourites = recipe.Favourites,
                Likes = recipe.Likes,
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