using System.Collections.Generic;
using Application.Commands;
using Domain.Entity;

namespace Application.Services
{
    public interface IRecipeService
    {
        List<Recipe> GetLastCount( int count );
        List<Recipe> GetByName( string name );
        List<Recipe> GetRecipeByTag( string tag );
        Recipe GetRecipeOfDay();
        Recipe Get( int id );
        Recipe Update( RecipeCommand recipe );
        void Create( RecipeCommand recipe );
        void Delete( int id );
    }
}