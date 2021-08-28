// <auto-generated />
using Infrastructure.DbContexts;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Infrastructure.Migrations
{
    [DbContext( typeof( RecipeDbContext ) )]
    partial class RecipeDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel( ModelBuilder modelBuilder )
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation( "Relational:MaxIdentifierLength", 128 )
                .HasAnnotation( "ProductVersion", "5.0.9" )
                .HasAnnotation( "SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn );

            modelBuilder.Entity( "Domain.Entity.Ingredient", b =>
                 {
                     b.Property<int>( "Id" )
                         .ValueGeneratedOnAdd()
                         .HasColumnType( "int" )
                         .HasAnnotation( "SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn );

                     b.Property<string>( "Description" )
                         .HasColumnType( "nvarchar(max)" );

                     b.Property<string>( "Name" )
                         .IsRequired()
                         .HasColumnType( "nvarchar(max)" );

                     b.Property<int>( "RecipeId" )
                         .HasColumnType( "int" );

                     b.HasKey( "Id" );

                     b.HasIndex( "RecipeId" );

                     b.ToTable( "Ingredient" );
                 } );

            modelBuilder.Entity( "Domain.Entity.Recipe", b =>
                 {
                     b.Property<int>( "Id" )
                         .ValueGeneratedOnAdd()
                         .HasColumnType( "int" )
                         .HasAnnotation( "SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn );

                     b.Property<int>( "CookingTime" )
                         .HasColumnType( "int" );

                     b.Property<string>( "Description" )
                         .HasColumnType( "nvarchar(max)" );

                     b.Property<int>( "Favourites" )
                         .HasColumnType( "int" );

                     b.Property<int>( "Likes" )
                         .HasColumnType( "int" );

                     b.Property<string>( "Name" )
                         .IsRequired()
                         .HasColumnType( "nvarchar(max)" );

                     b.Property<int>( "PersonCount" )
                         .HasColumnType( "int" );

                     b.Property<string>( "Photo" )
                         .HasColumnType( "nvarchar(max)" );

                     b.HasKey( "Id" );

                     b.ToTable( "Recipe" );
                 } );

            modelBuilder.Entity( "Domain.Entity.Step", b =>
                 {
                     b.Property<int>( "Id" )
                         .ValueGeneratedOnAdd()
                         .HasColumnType( "int" )
                         .HasAnnotation( "SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn );

                     b.Property<string>( "Description" )
                         .HasColumnType( "nvarchar(max)" );

                     b.Property<string>( "Name" )
                         .IsRequired()
                         .HasColumnType( "nvarchar(max)" );

                     b.Property<int>( "RecipeId" )
                         .HasColumnType( "int" );

                     b.HasKey( "Id" );

                     b.HasIndex( "RecipeId" );

                     b.ToTable( "Step" );
                 } );

            modelBuilder.Entity( "Domain.Entity.Tag", b =>
                 {
                     b.Property<int>( "Id" )
                         .ValueGeneratedOnAdd()
                         .HasColumnType( "int" )
                         .HasAnnotation( "SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn );

                     b.Property<string>( "Name" )
                         .IsRequired()
                         .HasColumnType( "nvarchar(max)" );

                     b.Property<int>( "RecipeId" )
                         .HasColumnType( "int" );

                     b.HasKey( "Id" );

                     b.HasIndex( "RecipeId" );

                     b.ToTable( "Tag" );
                 } );

            modelBuilder.Entity( "Domain.Entity.User", b =>
                 {
                     b.Property<int>( "Id" )
                         .ValueGeneratedOnAdd()
                         .HasColumnType( "int" )
                         .HasAnnotation( "SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn );

                     b.Property<string>( "Login" )
                         .IsRequired()
                         .HasColumnType( "nvarchar(max)" );

                     b.Property<string>( "Name" )
                         .IsRequired()
                         .HasColumnType( "nvarchar(max)" );

                     b.Property<string>( "Password" )
                         .IsRequired()
                         .HasColumnType( "nvarchar(max)" );

                     b.HasKey( "Id" );

                     b.ToTable( "User" );
                 } );

            modelBuilder.Entity( "Domain.Entity.Ingredient", b =>
                 {
                     b.HasOne( "Domain.Entity.Recipe", null )
                         .WithMany( "Ingredients" )
                         .HasForeignKey( "RecipeId" )
                         .OnDelete( DeleteBehavior.Cascade )
                         .IsRequired();
                 } );

            modelBuilder.Entity( "Domain.Entity.Step", b =>
                 {
                     b.HasOne( "Domain.Entity.Recipe", null )
                         .WithMany( "Steps" )
                         .HasForeignKey( "RecipeId" )
                         .OnDelete( DeleteBehavior.Cascade )
                         .IsRequired();
                 } );

            modelBuilder.Entity( "Domain.Entity.Tag", b =>
                 {
                     b.HasOne( "Domain.Entity.Recipe", null )
                         .WithMany( "Tags" )
                         .HasForeignKey( "RecipeId" )
                         .OnDelete( DeleteBehavior.Cascade )
                         .IsRequired();
                 } );

            modelBuilder.Entity( "Domain.Entity.Recipe", b =>
                 {
                     b.Navigation( "Ingredients" );

                     b.Navigation( "Steps" );

                     b.Navigation( "Tags" );
                 } );
#pragma warning restore 612, 618
        }
    }
}
