using Microsoft.EntityFrameworkCore.Migrations;

namespace Infrastructure.Migrations
{
    public partial class UpdateEntitiesAndRepository : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Recipe_Recipe_RecipeId",
                table: "Recipe");

            migrationBuilder.DropIndex(
                name: "IX_Recipe_RecipeId",
                table: "Recipe");

            migrationBuilder.DropColumn(
                name: "RecipeId",
                table: "Recipe");

            migrationBuilder.CreateIndex(
                name: "IX_Tag_RecipeId",
                table: "Tag",
                column: "RecipeId");

            migrationBuilder.AddForeignKey(
                name: "FK_Tag_Recipe_RecipeId",
                table: "Tag",
                column: "RecipeId",
                principalTable: "Recipe",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Tag_Recipe_RecipeId",
                table: "Tag");

            migrationBuilder.DropIndex(
                name: "IX_Tag_RecipeId",
                table: "Tag");

            migrationBuilder.AddColumn<int>(
                name: "RecipeId",
                table: "Recipe",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Recipe_RecipeId",
                table: "Recipe",
                column: "RecipeId");

            migrationBuilder.AddForeignKey(
                name: "FK_Recipe_Recipe_RecipeId",
                table: "Recipe",
                column: "RecipeId",
                principalTable: "Recipe",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
