using System.Collections.Generic;
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

        public List<Step> GetByRecipeId( int id )
        {
            return _recipeDbContext.Set<Step>().Where( s => s.RecipeId == id ).ToList();
        }

        public Step Get( int id )
        {
            return _recipeDbContext.Set<Step>().FirstOrDefault( s => s.Id == id );
        }

        public void Update( Step step )
        {
            Step _step = Get( step.Id );
            _step.CopyFrom( step );
        }
    }
}
