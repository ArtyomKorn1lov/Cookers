using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Domain.Entity;

namespace Domain.Repositories
{
    public interface IRecipeRepository
    {
        List<Recipe> GetLastCount( int count );
        List<Recipe> SeachRecipes( string name );
        List<Recipe> GetRecipeByTag( string tagName );
        Recipe Get( int id );
        Recipe GetDayRecipe();
        void Create( Recipe item );
        void Delete( int id );
    }
}
