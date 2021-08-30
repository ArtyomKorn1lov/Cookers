using Application.Commands;
using Domain.Entity;

namespace Application.EntityConverter
{
    public class IngredientConverter
    {
        public static Ingredient ToIngredientEntity( UpdateIngredientCommand ingredient, int recipeId )
        {
            if ( ingredient == null )
            {
                return null;
            }
            return new Ingredient( ingredient.Id, ingredient.Name, ingredient.Description, recipeId );
        }
    }
}
