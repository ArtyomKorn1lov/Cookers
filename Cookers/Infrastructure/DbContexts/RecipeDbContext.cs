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

        public DbSet<Recipe> Recipes { get; set; }
        public DbSet<Ingredient> Ingredients { get; set; }
        public DbSet<Step> Steps { get; set; }
        public DbSet<Tag> Tags { get; set; }

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
