using Domain.Entity;
using Domain.Repositories;
using Infrastructure.DbContexts;
using System.Linq;

namespace Infrastructure.Repositories
{
    public class IngredientRepository : IIngredientRepository
    {
        private RecipeDbContext _recipeDbContext;

        public IngredientRepository( RecipeDbContext context )
        {
            _recipeDbContext = context;
        }

        public Ingredient Get( int id )
        {
            return _recipeDbContext.Set<Ingredient>().FirstOrDefault( i => i.Id == id );
        }

        public void Create( Ingredient ingredient )
        {
            _recipeDbContext.Set<Ingredient>().Add( ingredient );
        }
    }
}
