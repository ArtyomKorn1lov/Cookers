using Domain.Entity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Configuration
{
    public class RecipeConfiguration : IEntityTypeConfiguration<Recipe>
    {
        public void Configure( EntityTypeBuilder<Recipe> builder )
        {
            builder.ToTable( nameof( Recipe ) );

            builder.HasKey( m => m.Id );

            builder.Property( m => m.Name ).IsRequired();
            builder.Property( m => m.Description );
            builder.Property( m => m.CookingTime ).IsRequired();
            builder.Property( m => m.Photo ).IsRequired();
            builder.Property( m => m.PersonCount ).IsRequired();
            builder.Property( m => m.Favourites ).IsRequired();
            builder.Property( m => m.Likes ).IsRequired();

            builder.HasMany( r => r.Ingredients ).WithOne().HasForeignKey( i => i.RecipeId ).OnDelete( DeleteBehavior.Cascade );
            builder.HasMany( r => r.Tags ).WithOne().HasForeignKey( t => t.RecipeId ).OnDelete( DeleteBehavior.Cascade );
            builder.HasMany( r => r.Steps ).WithOne().HasForeignKey( s => s.RecipeId ).OnDelete( DeleteBehavior.Cascade );
        }
    }
}
