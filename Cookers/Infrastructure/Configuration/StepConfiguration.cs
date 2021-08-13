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

            builder.Property( m => m.Name ).IsRequired();
            builder.Property( m => m.Description ).IsRequired();
        }
    }
}
