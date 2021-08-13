using Microsoft.EntityFrameworkCore.Migrations;

namespace Infrastructure.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up( MigrationBuilder migrationBuilder )
        {
            migrationBuilder.CreateTable(
                name: "Recipe",
                columns: table => new
                {
                    Id = table.Column<int>( type: "int", nullable: false )
                        .Annotation( "SqlServer:Identity", "1, 1" ),
                    Name = table.Column<string>( type: "nvarchar(max)", nullable: false ),
                    Description = table.Column<string>( type: "nvarchar(max)", nullable: false ),
                    CookingTime = table.Column<int>( type: "int", nullable: false ),
                    PersonCount = table.Column<int>( type: "int", nullable: false ),
                    Favourites = table.Column<int>( type: "int", nullable: false ),
                    Likes = table.Column<int>( type: "int", nullable: false ),
                    RecipeId = table.Column<int>( type: "int", nullable: true )
                },
                constraints: table =>
                {
                    table.PrimaryKey( "PK_Recipe", x => x.Id );
                    table.ForeignKey(
                        name: "FK_Recipe_Recipe_RecipeId",
                        column: x => x.RecipeId,
                        principalTable: "Recipe",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict );
                } );

            migrationBuilder.CreateTable(
                name: "Tag",
                columns: table => new
                {
                    Id = table.Column<int>( type: "int", nullable: false )
                        .Annotation( "SqlServer:Identity", "1, 1" ),
                    Name = table.Column<string>( type: "nvarchar(max)", nullable: false ),
                    RecipeId = table.Column<int>( type: "int", nullable: false )
                },
                constraints: table =>
                {
                    table.PrimaryKey( "PK_Tag", x => x.Id );
                } );

            migrationBuilder.CreateTable(
                name: "User",
                columns: table => new
                {
                    Id = table.Column<int>( type: "int", nullable: false )
                        .Annotation( "SqlServer:Identity", "1, 1" ),
                    Name = table.Column<string>( type: "nvarchar(250)", maxLength: 250, nullable: false ),
                    Login = table.Column<string>( type: "nvarchar(250)", maxLength: 250, nullable: false ),
                    Password = table.Column<string>( type: "nvarchar(250)", maxLength: 250, nullable: false )
                },
                constraints: table =>
                {
                    table.PrimaryKey( "PK_User", x => x.Id );
                } );

            migrationBuilder.CreateTable(
                name: "Ingredient",
                columns: table => new
                {
                    Id = table.Column<int>( type: "int", nullable: false )
                        .Annotation( "SqlServer:Identity", "1, 1" ),
                    Name = table.Column<string>( type: "nvarchar(max)", nullable: false ),
                    Description = table.Column<string>( type: "nvarchar(max)", nullable: false ),
                    RecipeId = table.Column<int>( type: "int", nullable: false )
                },
                constraints: table =>
                {
                    table.PrimaryKey( "PK_Ingredient", x => x.Id );
                    table.ForeignKey(
                        name: "FK_Ingredient_Recipe_RecipeId",
                        column: x => x.RecipeId,
                        principalTable: "Recipe",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade );
                } );

            migrationBuilder.CreateTable(
                name: "Step",
                columns: table => new
                {
                    Id = table.Column<int>( type: "int", nullable: false )
                        .Annotation( "SqlServer:Identity", "1, 1" ),
                    Name = table.Column<string>( type: "nvarchar(max)", nullable: false ),
                    Description = table.Column<string>( type: "nvarchar(max)", nullable: false ),
                    RecipeId = table.Column<int>( type: "int", nullable: false )
                },
                constraints: table =>
                {
                    table.PrimaryKey( "PK_Step", x => x.Id );
                    table.ForeignKey(
                        name: "FK_Step_Recipe_RecipeId",
                        column: x => x.RecipeId,
                        principalTable: "Recipe",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade );
                } );

            migrationBuilder.CreateIndex(
                name: "IX_Ingredient_RecipeId",
                table: "Ingredient",
                column: "RecipeId" );

            migrationBuilder.CreateIndex(
                name: "IX_Recipe_RecipeId",
                table: "Recipe",
                column: "RecipeId" );

            migrationBuilder.CreateIndex(
                name: "IX_Step_RecipeId",
                table: "Step",
                column: "RecipeId" );
        }

        protected override void Down( MigrationBuilder migrationBuilder )
        {
            migrationBuilder.DropTable(
                name: "Ingredient" );

            migrationBuilder.DropTable(
                name: "Step" );

            migrationBuilder.DropTable(
                name: "Tag" );

            migrationBuilder.DropTable(
                name: "User" );

            migrationBuilder.DropTable(
                name: "Recipe" );
        }
    }
}
