using Domain.Entity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Configuration
{
    public class TagConfiguration : IEntityTypeConfiguration<Tag>
    {
        public void Configure( EntityTypeBuilder<Tag> builder )
        {
            builder.ToTable( nameof( Tag ) ).HasKey( m => m.Id );

            builder.Property( m => m.Name ).HasMaxLength( 250 ).HasDefaultValue( string.Empty );
            builder.Property( m => m.RecipeId ).HasMaxLength( 10 ).HasDefaultValue( 0 );
        }
    }
}