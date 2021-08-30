using Application;
using Application.Services;
using Domain.Repositories;
using Infrastructure;
using Infrastructure.DbContexts;
using Infrastructure.Repositories;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace Web
{
    public class Startup
    {
        public Startup( IConfiguration configuration )
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices( IServiceCollection services )
        {
            services.AddControllers();

            services.AddScoped<IUnitOfWork, UnitOfWork>();
            services.AddScoped<IRecipeService, RecipeService>();
            services.AddScoped<IRecipeRepository, RecipeRepository>();

            services.AddSpaStaticFiles( configuration =>
            {
                configuration.RootPath = "ClientApp/dist";
            } );

            services.AddDbContext<RecipeDbContext>( options =>
            {
                string connectionString = Configuration.GetConnectionString( "CookersConnection" );
                options.UseSqlServer( connectionString );
            } );
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure( IApplicationBuilder app, IWebHostEnvironment env )
        {
            using ( var serviceScope = app.ApplicationServices.GetRequiredService<IServiceScopeFactory>().CreateScope() )
            {
                var recipeContext = serviceScope.ServiceProvider.GetService<RecipeDbContext>();
                recipeContext.Database.Migrate();
            }

            app.UseRouting();

            app.UseSpaStaticFiles();
            app.UseStaticFiles();

            app.UseEndpoints( endpoints =>
            {
                endpoints.MapControllers();
            } );

            app.UseSpa( spa =>
            {
                spa.Options.SourcePath = "ClientApp";

                if ( env.IsDevelopment() )
                {
                    spa.UseAngularCliServer( npmScript: "start" );
                }
            } );
        }
    }
}
