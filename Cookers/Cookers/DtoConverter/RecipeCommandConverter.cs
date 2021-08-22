using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Commands;
using Domain.Entity;
using Web.Dto;

namespace Web.DtoConverter
{
    public class RecipeCommandConverter
    {
        public static RecipeCommand ConvertToRecipeCommand( RecipeDto recipe )
        {
            if ( recipe == null )
            {
                return new RecipeCommand
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
            return new RecipeCommand
            {
                Id = recipe.Id,
                Name = recipe.Name,
                Description = recipe.Description,
                Photo = recipe.Photo,
                CookingTime = recipe.CookingTime,
                PersonCount = recipe.PersonCount,
                Favourites = recipe.Favourites,
                Likes = recipe.Likes,
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
