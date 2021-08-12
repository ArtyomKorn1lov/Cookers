using Domain.Entity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Configuration
{
    public class StepConfiguration : IEntityTypeConfiguration<Step>
    {
        public void Configure( EntityTypeBuilder<Step> builder )
        {
            builder.ToTable( nameof( Step ) ).HasKey( m => m.Id );

            builder.Property( m => m.Name ).HasMaxLength( 250 ).HasDefaultValue( string.Empty );
            builder.Property( m => m.Description ).HasMaxLength( 500 ).HasDefaultValue( string.Empty );
            builder.Property( m => m.RecipeId ).HasMaxLength( 10 ).HasDefaultValue( 0 );
        }
    }
}
