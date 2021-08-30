using Domain.Entity;
using Domain.Repositories;
using Infrastructure.DbContexts;
using System.Linq;

namespace Infrastructure.Repositories
{
    public class StepRepository : IStepRepository
    {
        private RecipeDbContext _recipeDbContext;

        public StepRepository( RecipeDbContext context )
        {
            _recipeDbContext = context;
        }

        public Step Get( int id )
        {
            return _recipeDbContext.Set<Step>().FirstOrDefault( s => s.Id == id );
        }

        public void Create( Step step )
        {
            _recipeDbContext.Set<Step>().Add( step );
        }
    }
}
