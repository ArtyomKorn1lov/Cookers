using Domain.Entity;
using Microsoft.EntityFrameworkCore;
using Infrastructure.Configuration;

namespace Infrastructure.DbContexts
{
    public class RecipeDbContext : DbContext
    {
        public RecipeDbContext( DbContextOptions options ) 
            : base( options )
        {
        }

        protected override void OnModelCreating( ModelBuilder builder )
        {
            base.OnModelCreating( builder );

            builder.ApplyConfiguration( new RecipeConfiguration() );
            builder.ApplyConfiguration( new IngredientConfiguration() );
            builder.ApplyConfiguration( new StepConfiguration() );
            builder.ApplyConfiguration( new TagConfiguration() );
            builder.ApplyConfiguration( new UserConfiguration() );
        }
    }
}
