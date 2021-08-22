using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Application.Commands;
using Domain.Entity;

namespace Application.EntityConverter
{
    public class RecipeCommandToRecipeEntity
    {
        public static Recipe ConvertToRecipeEntity( RecipeCommand recipe )
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
