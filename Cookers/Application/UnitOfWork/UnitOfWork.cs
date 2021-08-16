using Infrastructure.DbContexts;

namespace Application.UnitOfWork
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
