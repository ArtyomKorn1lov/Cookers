using Domain.Entity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Configuration
{
    public class IngredientConfiguration : IEntityTypeConfiguration<Ingredient>
    {
        public void Configure( EntityTypeBuilder<Ingredient> builder )
        {
            builder.ToTable( nameof( Ingredient ) ).HasKey( m => m.Id );

            builder.Property( m => m.Name ).HasMaxLength( 250 ).HasDefaultValue( string.Empty );
            builder.Property( m => m.Description ).HasMaxLength( 500 ).HasDefaultValue( string.Empty );
            builder.Property( m => m.RecipeId ).HasMaxLength( 10 ).HasDefaultValue( 0 );
        }
    }
}
