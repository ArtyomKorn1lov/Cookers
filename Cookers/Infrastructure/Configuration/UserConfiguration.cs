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

            builder.Property( m => m.Name ).HasMaxLength( 250 ).HasDefaultValue( string.Empty );
            builder.Property( m => m.Login ).HasMaxLength( 250 ).HasDefaultValue( string.Empty );
            builder.Property( m => m.Password ).HasMaxLength( 250 ).HasDefaultValue( string.Empty );
        }
    }
}