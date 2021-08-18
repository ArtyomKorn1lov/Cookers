using Domain.Entity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Configuration
{
    public class IngredientConfiguration : IEntityTypeConfiguration<Ingredient>
    {
        public void Configure( EntityTypeBuilder<Ingredient> builder )
        {
            builder.ToTable( nameof( Ingredient ) );

            builder.HasKey( m => m.Id );

            builder.Property( m => m.Name ).IsRequired();
            builder.Property( m => m.Description );
        }
    }
}
