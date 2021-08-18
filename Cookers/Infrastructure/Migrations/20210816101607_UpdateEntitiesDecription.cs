using Microsoft.EntityFrameworkCore.Migrations;

namespace Infrastructure.Migrations
{
    public partial class UpdateEntitiesDecription : Migration
    {
        protected override void Up( MigrationBuilder migrationBuilder )
        {
            migrationBuilder.AlterColumn<string>(
                name: "Description",
                table: "Step",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof( string ),
                oldType: "nvarchar(max)" );
        }

        protected override void Down( MigrationBuilder migrationBuilder )
        {
            migrationBuilder.AlterColumn<string>(
                name: "Description",
                table: "Step",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof( string ),
                oldType: "nvarchar(max)",
                oldNullable: true );
        }
    }
}
