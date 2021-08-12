using Domain.Entity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Configuration
{
    public class RecipeConfiguration : IEntityTypeConfiguration<Recipe>
    {
        public void Configure( EntityTypeBuilder<Recipe> builder )
        {
            builder.ToTable( nameof( Recipe ) ).HasKey( m => m.Id );

            builder.Property( m => m.Name ).HasMaxLength( 250 ).HasDefaultValue( string.Empty );
            builder.Property( m => m.Description ).HasMaxLength( 500 ).HasDefaultValue( string.Empty );
            builder.Property( m => m.Photo ).HasMaxLength( 250 ).HasDefaultValue( string.Empty );
            builder.Property( m => m.CookingTime ).HasMaxLength( 10 ).HasDefaultValue( 0 );
            builder.Property( m => m.Peoples ).HasMaxLength( 10 ).HasDefaultValue( 0 );
            builder.Property( m => m.Favourites ).HasMaxLength( 10 ).HasDefaultValue( 0 );
            builder.Property( m => m.Likes ).HasMaxLength( 10 ).HasDefaultValue( 0 );
        }
    }
}
