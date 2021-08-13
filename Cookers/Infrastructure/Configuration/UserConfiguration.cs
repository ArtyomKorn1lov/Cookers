using Domain.Entity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Configuration
{
    public class UserConfiguration : IEntityTypeConfiguration<User>
    {
        public void Configure( EntityTypeBuilder<User> builder )
        {
            builder.ToTable( nameof( User ) ).HasKey( m => m.Id );

            builder.Property( m => m.Name ).IsRequired().HasMaxLength( 250 );
            builder.Property( m => m.Login ).IsRequired().HasMaxLength( 250 );
            builder.Property( m => m.Password ).IsRequired().HasMaxLength( 250 );
        }
    }
}
