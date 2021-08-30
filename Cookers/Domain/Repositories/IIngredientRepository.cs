using Domain.Entity;

namespace Domain.Repositories
{
    public interface IIngredientRepository
    {
        Ingredient Get( int id );
        void Create( Ingredient item );
    }
}
