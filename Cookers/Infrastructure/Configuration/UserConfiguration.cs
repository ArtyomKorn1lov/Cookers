using Domain.Entity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Configuration
{
    public class UserConfiguration : IEntityTypeConfiguration<User>
    {
        public void Configure( EntityTypeBuilder<User> builder )
        {
            builder.ToTable( nameof( User ) );

            builder.HasKey( m => m.Id );

            builder.Property( m => m.Name ).IsRequired();
            builder.Property( m => m.Login ).IsRequired();
            builder.Property( m => m.Password ).IsRequired();
        }
    }
}
