using Infrastructure.DbContexts;

namespace Infrastructure
{
    public class UnitOfWork : IUnitOfWork
    {
        private RecipeDbContext _recipeDbContext;

        public UnitOfWork(RecipeDbContext recipeDbContext)
        {
            _recipeDbContext = recipeDbContext;
        }

        public void Commit()
        {
            _recipeDbContext.SaveChanges();
        }
    }
}
