using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Domain.Entity;

namespace Application.Services
{
    public interface IRecipeService
    {
        List<Recipe> GetLastCount( int count );
        List<Recipe> SeachRecipes( string name );
        List<Recipe> GetRecipeByTag( string tagName );
        Recipe GetDayRecipe();
        Recipe Get( int id );
        void Create( Recipe recipe );
        void Delete( int id );
    }
}
