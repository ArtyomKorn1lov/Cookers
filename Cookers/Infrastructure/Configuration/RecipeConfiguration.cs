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

            builder.Property( m => m.Name ).IsRequired();
            builder.Property( m => m.Description ).IsRequired();
            builder.Property( m => m.CookingTime ).IsRequired();
            builder.Property( m => m.PersonCount ).IsRequired();
            builder.Property( m => m.Favourites ).IsRequired();
            builder.Property( m => m.Likes ).IsRequired();
        }
    }
}
