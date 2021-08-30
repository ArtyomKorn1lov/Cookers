using Application.Commands;
using Domain.Entity;

namespace Application.EntityConverter
{
    public class IngredientConverter
    {
        public static Ingredient ToIngredientEntity( UpdateIngredientCommand ingredient )
        {
            if ( ingredient == null )
            {
                return null;
            }
            return new Ingredient
            {
                Name = ingredient.Name,
                Description = ingredient.Description
            };
        }
    }
}
